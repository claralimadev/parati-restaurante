# EVAL 02 — Dúvidas da loja

## Objetivo
Garantir que o assistente responda dúvidas sobre a loja sem inventar informação e encaminhe ao WhatsApp quando apropriado.

## Casos
| Entrada | Esperado | Resultado obtido |
| --- | --- | --- |
| `quanto custa o cupuacu` | R$ 30,00 por 1 kg e R$ 3,00 a porção de 100 g | PASSOU |
| `qual o horario` | Seg. a sáb., 11h às 22h; dom., 11h às 18h | PASSOU (resposta existente no fluxo) |
| `onde vocês ficam` | Endereço com link do Maps | PASSOU (resposta existente no fluxo) |
| `tem entrega` | Encaminha ao WhatsApp, sem prometer taxa ou prazo | PASSOU (resposta existente no fluxo) |

## Verificação
- [x] Cálculo de preço validado no EVAL 01.
- [x] Demais respostas revisadas no código de `answer()` em `index.html`.

## Resultado
PASSOU.
