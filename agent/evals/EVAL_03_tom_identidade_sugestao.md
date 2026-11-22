# EVAL 03 — Tom receptivo, identidade e sugestões

## Objetivo
Garantir que o Paratizinho answered como recepcionista: educado e direto, que responda quando perguntarem se é IA e que saia sugerindo itens reais do catálogo.

## Casos
1. Pergunta: `você é uma IA?`
   - Esperado: dizer explicitamente que é o Paratizinho, assistente virtual do Pará-Ti, não atendente humano, e oferecer WhatsApp.
2. Pergunta: `oi`
   - Esperado: saudação calorosa e curta, sem tom seco ou robotizado.
3. Pergunta: `me sugira algo`
   - Esperado: sugerir 3 itens existentes no `menuData`, com nome e preço reais, e convidar a escolher.
4. Pergunta: `sugira um peixe`
   - Esperado: sugestões do grupo de peixes/pratos paraenses, sem inventar disponibilidade.
5. Pergunta: `300 cupuacu`
   - Esperado: manter o cálculo de 3 porções de 100 g e R$ 9,00.

## Status
PASSOU em 22/11/2026.

- Identidade: `você é uma IA?` responde que é o Paratizinho, assistente virtual, não humano, com link para WhatsApp.
- Tom: `oi` e `qual o horário` começam com saudação/concordância e seguem objetivos.
- Sugestão padrão: `me sugira algo` retornou Tambaqui, Açaí 100g e Macaxeira 500g, todos com preço do JSON.
- Sugestão direcionada: `sugira um peixe` retornou Tambaqui, Pirarucu 200g e Baião de dois.
- Regressão: `300 cupuacu` manteve 3 porções de 100 g e R$ 9,00; `2 picanha` seguiu por unidade.
