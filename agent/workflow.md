# workflow.md — Como o Paratizinho responde

## Fluxo do agente
1. A pessoa digita no chat; `replyTo()` chama `agentSend()`.
2. `loadAgentSystem()` busca `persona.md`, `goal.md`, `rules.md`, `workflow.md` e `knowledge.md` no próprio site e monta o prompt do sistema.
3. `agentSend()` envia o histórico da conversa e a lista de ferramentas para o proxy `/api/chat`.
4. O modelo decide se responde ou se chama uma ferramenta. O Paratizinho não percorre uma lista fixa de perguntas.
5. `executeTool()` roda no navegador e devolve dados reais: cardápio, dados da loja, cálculo de preço ou comanda.
6. Se houve chamada de ferramenta, o resultado volta para o modelo e o loop continua (no máximo 6 etapas).
7. Quando o modelo devolve texto final, `addMessage()` mostra a resposta; se mencionar WhatsApp, o link é anexado.
8. Qualquer alteração na comanda passa por `setQty()` e `renderComanda()`.

## Ferramentas
- `get_menu` — lê o catálogo do `menuData`.
- `get_store_info` — horário, endereço, Instagram e WhatsApp.
- `calculate_price` — aplica as regras de porção, grama, ml e unidade.
- `add_to_cart`, `remove_from_cart`, `clear_cart`, `get_cart` — mexem na comanda.

## Fontes
- `index.html` — chat, prompt loader e execução das ferramentas.
- `index.html#menuData` — base de conhecimento em JSON.
- `netlify/functions/chat.mjs` — proxy que esconde a chave e fala com o OpenRouter.
- `netlify.toml` — publica o site e expõe `/api/chat`.
- `agent/persona.md`, `goal.md`, `rules.md`, `knowledge.md` — comportamento esperado.
- `agent/evals/` — verificações de comportamento.

## Configuração
A chave `OPENROUTER_API_KEY` fica só no painel do Netlify. O modelo padrão é `openrouter/free`, que escolhe um modelo gratuito disponível. Nunca coloque a chave no HTML nem no repositório.

## Manutenção
Para mudar comportamento, edite os arquivos de agente e/ou o JSON — o prompt é recarregado a cada sessão. Para mudar regra de comanda, ajuste `executeTool()` junto com `productBase()`. Rode os evals, commit e push.
