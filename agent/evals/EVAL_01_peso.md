# EVAL 01 — Cálculo por peso

## Objetivo
Garantir que itens `sale: "measure"` cobrem proporcionalmente ao peso e que itens `sale: "unit"` nunca sejam tratados como peso.

## Casos
| Entrada | Esperado | Resultado obtido |
| --- | --- | --- |
| `300 cupuacu` | 3 porções de 100 g, R$ 9,00, menção a R$ 30,00/kg | PASSOU |
| `meio quilo de pirarucu cru` | 5 porções de 100 g, R$ 45,00, R$ 90,00/kg | PASSOU |
| `250 cupuacu` | Oferece 200 g (R$ 6,00) ou 300 g (R$ 9,00) | PASSOU |
| `2 picanha` | 2 unidades, R$ 280,00, sem cálculo por grama | PASSOU |

## Verificação
- [x] Teste executado no Chrome headless em 22/11/2026.
- [x] Respostas comparadas com a tabela acima.

## Resultado
PASSOU. Evidência: saída do teste com as quatro mensagens do assistente.
