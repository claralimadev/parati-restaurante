# workflow.md — Como o Paratizinho responde

## Fluxo no site
1. A pessoa digita no campo `chatInput` e o formulário chama `replyTo(texto)`.
2. `normalize()` limpa a pergunta.
3. `handleOrderIntent()` procura produto e quantidade/peso.
4. `parseRequested()` entende gramas, quilos, litros, porções e números soltos.
5. `productBase()` traz a regra de venda do JSON: porção em gramas e preço por quilo.
6. `setQty()` atualiza a comanda com o número de porções.
7. Se não for intenção de pedido, `answer()` responde com horário, endereço, cardápio, pedido ou WhatsApp.
8. `botReply()` mostra a resposta com efeito de digitação.

## Fontes
- `index.html` — marcação do chat e toda a lógica JS.
- `index.html#menuData` — base de conhecimento em JSON.
- `agent/persona.md`, `goal.md`, `rules.md` — comportamento esperado.
- `agent/evals/` — verificações de comportamento.

## Manutenção
Ao mudar uma regra de preço ou de atendimento: atualize o JSON ou o JS, rode os evals, commit e push. O GitHub Pages publica sozinho.
