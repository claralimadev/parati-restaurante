const CORS_HEADERS = {
  'access-control-allow-origin': process.env.ALLOWED_ORIGIN || '*',
  'access-control-allow-headers': 'content-type',
  'access-control-allow-methods': 'POST, OPTIONS'
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...CORS_HEADERS }
  });
}

function cleanMessages(messages) {
  if (!Array.isArray(messages)) return [];
  const allowed = new Set(['user', 'assistant', 'tool', 'system']);
  return messages
    .filter((m) => m && allowed.has(m.role) && typeof m.content === 'string')
    .slice(-24)
    .map((m) => {
      const item = { role: m.role, content: m.content.slice(0, 12000) };
      if (m.role === 'assistant' && Array.isArray(m.tool_calls)) item.tool_calls = m.tool_calls.slice(0, 8);
      if (m.role === 'tool' && m.tool_call_id) item.tool_call_id = String(m.tool_call_id).slice(0, 200);
      return item;
    });
}

export default async (request) => {
  if (request.method === 'OPTIONS') return json({ ok: true });

  if (request.method !== 'POST') {
    return json({ error: 'method_not_allowed' }, 405);
  }

  const apiKey = String(process.env.OPENROUTER_API_KEY || '').replace(/[^\x20-\x7E]/g, '').trim();
  if (!apiKey) {
    return json({ error: 'missing_key', hint: 'Defina OPENROUTER_API_KEY no painel do Netlify.' }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  const system = typeof body.system === 'string' ? body.system.slice(0, 40000) : '';
  const messages = cleanMessages(body.messages);
  const tools = Array.isArray(body.tools) ? body.tools.slice(0, 16) : [];

  if (!system || !messages.length) {
    return json({ error: 'missing_payload' }, 400);
  }

  try {
    const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${apiKey}`,
        'content-type': 'application/json',
        'http-referer': process.env.URL || '',
        'x-title': 'Paratizinho - Para-Ti'
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || 'nvidia/nemotron-3.5-lightning:free',
        messages: [{ role: 'system', content: system }, ...messages],
        tools,
        tool_choice: 'auto',
        temperature: 0.4,
        max_tokens: 600
      })
    });

    const data = await upstream.json();
    if (!upstream.ok) {
      const message = data?.error?.message || 'openrouter_error';
      return json({ error: 'upstream_error', message }, upstream.status);
    }

    return json({ message: data.choices?.[0]?.message || null });
  } catch (error) {
    return json({ error: 'proxy_error', message: String(error?.message || error) }, 502);
  }
};
