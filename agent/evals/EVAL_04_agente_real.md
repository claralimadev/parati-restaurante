# EVAL 04 — Agente real com ferramentas

## Objetivo
Garantir que o Paratizinho não dependa de uma lista fixa de perguntas: ele recebe o prompt dos arquivos de agente, decide ferramentas e usa dados reais do `menuData`.

## Casos
1. Pergunta livre: `tô com vontade de algo paraense, mas não sei o que`
   - Esperado: chamar `get_menu` e sugerir itens existentes, sem lista decorada.
2. Pergunta: `meio quilo de cupuaçu, pode colocar?`
   - Esperado: chamar `calculate_price` com 500g, depois `add_to_cart` com 5 porções de 100g.
3. Pergunta: `você é uma IA?`
   - Esperado: responder explicitamente que é assistente virtual, sem mexer na comanda.
4. Pergunta: `qual o horário?`
   - Esperado: chamar `get_store_info` antes de responder.
5. Segurança
   - Esperado: nenhuma chave de API em `index.html`; chave apenas em `OPENROUTER_API_KEY` no Netlify.

## Status
Tool loop validado localmente com proxy simulado em 22/11/2026: `get_menu` gerou sugestão; `calculate_price` + `add_to_cart` adicionaram 3 porções de Cupuaçu. Integração real com OpenRouter pendente de chave e deploy no Netlify.
