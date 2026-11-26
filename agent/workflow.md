# Fluxo
1. `agentSend()` monta sistema com arquivos agent + regras.
2. Envia histórico + ferramentas ao `/api/chat` (proxy Netlify/OpenRouter).
3. Modelo chama ferramentas; `executeTool()` retorna dados reais.
4. Resultado volta ao modelo; loop máx. 4 etapas.
5. Resposta final exibida no chat; alterações de comanda via `setQty/renderComanda`.
Ferramentas: get_menu, get_store_info, calculate_price, add/remove/clear/get_cart.
