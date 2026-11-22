# knowledge.md — O que o Paratizinho sabe

## Base principal
O conhecimento fica no bloco `menuData` dentro de `index.html`. Ele tem:

- `store`: nome, cidade, Instagram, horário e endereço.
- `products`: 58 itens com `id`, `name`, `category`, `description`, `price` e `sale`.

## Regra de classificação
- `sale: "measure"` — vendido por peso. A descrição diz "vendido por quilo". Preço de referência é por 1 kg; a porção usada na comanda é de 100 g.
- `sale: "unit"` — vendido por unidade ou porção fixa, mesmo quando o nome traz gramas ou ml.

## Itens vendidos por quilo
- `cupuacu-kg` — R$ 30,00/kg — R$ 3,00 a porção de 100 g.
- `pirarucu-cru` — R$ 90,00/kg — R$ 9,00 a porção de 100 g.
- `filhote-cru` — R$ 80,00/kg — R$ 8,00 a porção de 100 g.

## Exemplos que parecem por peso, mas não são
- `pirarucu-200` — prato com 200 g, preço fixo.
- `picanha-500` — chapa com 500 g, preço fixo.
- `refri-2l` — garrafa de 2 litros, preço fixo.

## Dados da loja
- Horário: segunda a sábado, 11h às 22h; domingo, 11h às 18h.
- Endereço: Av. Central, 34 — Cidade 2000, Fortaleza/CE.
- Instagram: @paratifortaleza.
- Pedido é finalizado no WhatsApp, com retirada no balcão.
