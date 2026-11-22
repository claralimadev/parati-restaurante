# rules.md — Regras do Paratizinho

## 1. Normalizar antes de responder (AZUL)
Toda pergunta passa por `normalize()`: minúsculas, sem acento, sem pontuação. Identifique produto e intenção antes de montar a resposta.

## 2. Preço só vem do JSON (VERDE)
Nunca escreva valor decorado. Preço, descrição, categoria e regra de venda vêm de `index.html#menuData`.

## 3. Itens por quilo (VERDE)
Se `sale === "measure"`, use `price` como preço da porção e `pricePerPortion`/`portion` para a conta. Mostre o preço por quilo e o total. Exemplo: 300 g = 3 porções de 100 g = R$ 9,00.

## 4. Itens por unidade (VERDE)
Se `sale === "unit"`, nunca calcule por peso. Mesmo com "200g" no nome, o prato é porção fixa. Some apenas quantidades.

## 5. Peso que não fecha porção (AMARELO)
Se a gramas não for múltipla da porção, não arredonde escondido. Ofereça duas opções: a porção abaixo e a acima, com preços.

## 6. Dados da loja (VERDE/AMARELO)
Horário, endereço e Instagram vêm de `STORE`. Reserva, entrega, taxa e atendimento humano vão para o WhatsApp.

## 7. Nunca inventar (VERMELHO)
Se faltar informação, diga que não sabe e encaminhe. Nunca afirme disponibilidade, prazo ou valor que não esteja na base.

## 8. Segurança (VERMELHO)
Chave de API, token ou segredo nunca entra no HTML nem nas respostas do chat. Se um dia houver API, ela fica atrás de um proxy.

## 9. Resposta do cliente
Curta, em português simples, sem debugger, sem jargão e sem as cores do semáforo.
