window.CURSO_AULA2 = {
  logo: "assets/logo-publicsoft.png",
  // logoCdn fallback (unused): "https://www.publicsoft.com.br/assets/Logo-01.b76c9c03.png"
  logoCdn: "https://www.publicsoft.com.br/assets/Logo-01.b76c9c03.png",
  titulo: "Agentes de IA no dia a dia",
  meta: "Aula 2 · PublicSoft · treinamento interno",
  mensagem: {
    titulo: "Chat responde. Agente age.",
    sub: "Na aula 1 você pediu bem. Agora a IA executa com a sua supervisão — ferramenta, missão clara e aprovação humana.",
    foto: "assets/abertura-chat-agente-ok.png",
    fotoAlt: "Montagem: à esquerda o chat responde; à direita o agente usa ferramentas, mas o envio só com APPROVE / OK humano",
    fotoLegenda: "Relaxa: o agente não assume o suporte sozinho. (Sem missão e sem o seu ok… aí complica.)",
    pontos: [
      "Chat: você pergunta, recebe texto/imagem/áudio e decide o próximo passo.",
      "Agente: recebe um papel, usa ferramentas e avança tarefas (com o seu ok quando importa).",
      "Regra de ouro: um agente por papel, escopo fechado e humano no gatilho sensível."
    ]
  },
  recapAula1: {
    titulo: "Recap · Aula 1 · 5 blocos",
    lead: "Lembra da Aula 1? No chat, cada pedido forte usa os 5 blocos. No agente, essa estrutura vai para a definição — e a tarefa fica curta.",
    blocos: [
      { n: 1, t: "Contexto", d: "Quem você é e a situação" },
      { n: 2, t: "Objetivo", d: "O que precisa sair" },
      { n: 3, t: "Restrições", d: "Tom, tamanho, limites" },
      { n: 4, t: "Formato", d: "Lista, tabela, mensagem" },
      { n: 5, t: "Exemplo", d: "Modelo do que é bom" }
    ]
  },
  ilustracoes: {
    chatVsAgente: {
      src: "assets/chat-vs-agente.png",
      alt: "Montagem CHAT vs AGENTE: chat só responde; agente usa ferramentas com aprovação humana",
      legenda: "Chat responde. Agente age — com missão e o seu ok."
    },
    aprovacao: {
      src: "assets/aprovacao-humana.png",
      alt: "Montagem: rascunho pronto, AUTO-SEND bloqueado e humano confirmando o envio",
      legenda: "Envio e publicação: sempre com aprovação humana."
    }
  },
  pilares: [
    { t: "Chat", p: "Conversa. Responde. Você cola o resultado onde precisa." },
    { t: "Agente", p: "Age. Usa apps, arquivos e rotinas — com missão e limites." },
    { t: "Ferramentas", p: "E-mail, planilha, browser, terminal, WhatsApp… o mínimo necessário." },
    { t: "Aprovação", p: "Humano confirma envio, publicação e qualquer dado sensível." }
  ],
  futuro: [
    { t: "Chat", p: "Responde na hora. Bom para rascunho, explicação e brainstorm." },
    { t: "Agente", p: "Executa passos: pesquisa, edita, agenda, abre apps." },
    { t: "Local", p: "Hermes + Ollama: roda na sua máquina, mais controle de dados." },
    { t: "Nuvem", p: "Grok Bot e similares: conecta apps; exige plano/vínculo para uso contínuo." }
  ],
  usoCorreto: [
    { t: "Use o chat quando…", itens: [
      "Precisa de um rascunho rápido (WhatsApp, e-mail, ata).",
      "Quer explicar, comparar ou brainstorm sem tocar em sistemas.",
      "O resultado final você mesmo cola e revisa."
    ]},
    { t: "Use o agente quando…", itens: [
      "A tarefa se repete (rotina da manhã, planilha, follow-up).",
      "Precisa cruzar apps ou arquivos com poucos cliques.",
      "Você define papel + missão + aprovação antes de soltar."
    ]}
  ],
  cuidados: [
    { t: "Dado sensível", p: "Sem CPF, senha, contrato confidencial ou dado de cliente sem anonimizar." },
    { t: "Aprovação humana", p: "Envio de mensagem, publicação e pagamento: você confirma." },
    { t: "Um agente por papel", p: "Suporte ≠ comercial ≠ RH. Escopo fechado evita bagunça." },
    { t: "Local vs nuvem", p: "Local (Ollama/Hermes) = mais controle. Nuvem = mais apps, mais atenção ao plano." }
  ],
  antiPadroes: [
    { t: "Um agente para tudo", p: "Suporte + comercial + RH no mesmo agente vira bagunça. Um papel, um escopo." },
    { t: "Envia / publica sem aprovação humana", p: "Rascunho ok. Envio, publicação e pagamento: só com o seu ok." },
    { t: "Prompt/definição vaga", p: "Sem papel, sem fora de escopo e sem formato, o agente improvisa — e improvisa mal." }
  ],
  diaADia: [
    { t: "WhatsApp · rascunho", p: "Agente monta a resposta; humano revisa e envia. Nunca envio automático sem ok." },
    { t: "Planilha", p: "Organizar colunas, status e checklist de licitações — você valida os números." },
    { t: "Rotina da manhã", p: "Resumo de e-mails, pendências e prioridades do dia em um cartão." },
    { t: "Ata de reunião", p: "Áudio/notas → ata estruturada com ações e responsáveis." },
    { t: "Teaser de edital", p: "Resumo curto do objeto, prazos e próximos passos — sem inventar valor." }
  ],
  criarAgente: [
    { n: 1, t: "Nome + papel", d: "Ex.: Ana · suporte Contrata Public" },
    { n: 2, t: "Missão", d: "O que ele deve entregar, em 1–2 frases" },
    { n: 3, t: "Fora de escopo", d: "O que NÃO pode fazer (enviar sozinho, inventar prazo…)" },
    { n: 4, t: "Ferramentas mínimas", d: "Só o necessário: browser, planilha, editor…" },
    { n: 5, t: "Sucesso", d: "Como você sabe que deu certo (checklist)" },
    { n: 6, t: "Aprovação", d: "Onde o humano entra (enviar, publicar, pagar)" },
    { n: 7, t: "Teste pequeno → rotina", d: "1 tarefa curta; se ok, vira hábito da equipe" }
  ],
  hardwareNota: "Local (Ollama/Hermes): precisa de RAM decente (ideal 16 GB+). PC fraco: faça só o cartão do agente e acompanhe a demo do instrutor. Modelos menores (ex.: 7B–8B) ajudam em máquina limitada; se travar, use o caminho da nuvem só na demo.",
  baixar: [
    {
      id: "ollama",
      nome: "Ollama",
      lead: "Modelos locais na sua máquina",
      desc: "Base gratuita para rodar IA offline/local. Par da Hermes no caminho 100% gratuito.",
      url: "https://ollama.com/download",
      qr: "assets/qr/ollama.png",
      comoAbrir: "Abra ollama.com/download → instale para seu SO → depois use com Hermes.",
      gratuito: true,
      pago: false,
      status: "link ativo",
      cmd: null
    },
    {
      id: "hermes",
      nome: "Hermes Agent",
      lead: "Agente gratuito com Ollama",
      desc: "Caminho principal grátis: baixa Hermes, conecta ao Ollama e lança com um comando.",
      url: "https://hermes-agent.nousresearch.com/",
      docs: "https://docs.ollama.com/integrations/hermes",
      docsWin: "https://hermes-agent.nousresearch.com/docs/user-guide/windows-native",
      install: "https://hermes-agent.nousresearch.com/install.sh",
      qr: "assets/qr/hermes.png",
      comoAbrir: "Instale Ollama → no Windows: PowerShell com install.ps1 OU `ollama launch hermes` → veja docs Windows native. No Linux/Mac: instale Hermes e use `ollama launch hermes`.",
      gratuito: true,
      pago: false,
      status: "link ativo",
      cmd: "ollama launch hermes",
      cmdWin: "iex (irm https://hermes-agent.nousresearch.com/install.ps1)"
    },
    {
      id: "grokbot",
      nome: "Grok Bot",
      lead: "App gratuito · uso contínuo com plano",
      desc: "Baixar o app é livre. Uso contínuo: Cursor (Pro/Pro+/Ultra/Teams) ou vínculo SuperGrok / Plus / Heavy / X Premium+. Trial: crédito + janela de 7 dias (docs oficiais: crédito do trial não vira plano pago / cancelar esse trial não cobra). No iPhone, trial da App Store é outro: pode virar assinatura Apple se não cancelar.",
      url: "https://x.ai/bot",
      docs: "https://cursor.com/docs/grok-bot/get-started",
      plans: "https://cursor.com/help/grok-bot/plans",
      qr: "assets/qr/grokbot.png",
      comoAbrir: "Baixe em x.ai/bot → siga get-started → veja planos se for uso contínuo.",
      gratuito: true,
      pago: true,
      status: "link ativo",
      cmd: null
    }
  ],
  outrosGratuitos: [
    {
      id: "openwebui",
      nome: "Open WebUI",
      lead: "Interface web para modelos locais",
      desc: "Painel amigável em cima do Ollama — bom para time que prefere chat no navegador.",
      url: "https://openwebui.com/",
      qr: "assets/qr/openwebui.png",
      gratuito: true
    },
    {
      id: "aider",
      nome: "Aider",
      lead: "Agente de código no terminal",
      desc: "Edita projeto com IA no git. Útil para quem programa; complementar ao caminho Hermes+Ollama.",
      url: "https://aider.chat/",
      qr: "assets/qr/aider.png",
      gratuito: true
    }
  ],
  promptVs: {
    titulo: "Prompt no chat vs instrução no agente",
    chave: "Chat precisa de estrutura a cada mensagem; agente precisa de estrutura na criação — e pedidos claros nas tarefas.",
    chat: {
      titulo: "Chat (Aula 1) · 5 blocos",
      lead: "A cada mensagem você monta o pedido completo.",
      blocos: [
        { n: 1, t: "Contexto", d: "Quem você é e a situação" },
        { n: 2, t: "Objetivo", d: "O que precisa sair" },
        { n: 3, t: "Restrições", d: "Tom, tamanho, limites" },
        { n: 4, t: "Formato", d: "Lista, tabela, mensagem" },
        { n: 5, t: "Exemplo", d: "Modelo do que é bom" }
      ]
    },
    agente: {
      titulo: "Agente · estrutura na criação",
      lead: "Fixa a estrutura na definição do agente. Nas tarefas, peça mais curto.",
      blocos: [
        { n: 1, t: "Papel / nome", d: "Identidade e função do agente" },
        { n: 2, t: "Missão", d: "O que ele existe para entregar" },
        { n: 3, t: "Restrições / fora de escopo", d: "O que não pode fazer" },
        { n: 4, t: "Formato de entrega", d: "Como o resultado deve chegar" },
        { n: 5, t: "Quando pedir aprovação", d: "Gatilhos humanos (enviar, publicar…)" },
        { n: 6, t: "Ferramentas permitidas", d: "O mínimo necessário" }
      ],
      tarefa: {
        titulo: "Em cada tarefa (mais curto)",
        itens: [
          "Resultado esperado (outcome)",
          "Restrições desta vez",
          "Entregável (o que devolver)"
        ],
        nota: "Quando o papel já está forte, a tarefa pode ser bem objetiva."
      }
    }
  },
  casoMesmo: {
    titulo: "Mesma tarefa · chat vs agente",
    lead: "Exemplo PublicSoft: rascunho de resposta WhatsApp de suporte sobre status de processo no Contrata Public.",
    situacao: "Cliente no WhatsApp perguntou por que o status do processo não atualiza no Contrata Public (sem nome nem dado sensível).",
    chat: `Contexto: Sou analista de suporte da PublicSoft (Contrata Public). Cliente no WhatsApp perguntou por que o status do processo não atualiza (sem nome, CPF ou dado sensível).

Objetivo: Mensagem clara, pronta para eu revisar e enviar no WhatsApp.

Restrições: Máx. 6 linhas; linguagem simples; sem culpar o usuário; não inventar prazo nem status; tom acolhedor da PublicSoft.

Formato: Texto pronto para WhatsApp + 1 pergunta de confirmação no fim.

Exemplo de tom: “Entendi sua dúvida. Vou te orientar no passo a passo…”`,
    agenteDef: `Nome: Bia · suporte WhatsApp Contrata Public
Papel: Analista de suporte N1 — rascunhos de WhatsApp sobre Contrata Public
Missão: Montar respostas curtas e claras sobre status de processo e dúvidas frequentes, para o humano revisar e enviar.
Fora de escopo: Não envia sozinha; não inventa prazo/status; não pede CPF/senha; não fala de valor de contrato.
Formato de entrega: Texto WhatsApp (máx. 6 linhas) + 1 pergunta de confirmação.
Quando pedir aprovação: Sempre antes de qualquer envio ou publicação.
Ferramentas: Apenas editor de texto / chat — sem e-mail automático, sem WhatsApp real.`,
    agenteTarefa: `Outcome: Rascunho de resposta WhatsApp sobre status de processo que não atualiza.
Restrições desta vez: Máx. 6 linhas; sem inventar prazo; sem dado sensível.
Entregável: Texto pronto para eu colar no WhatsApp + 1 pergunta de confirmação.`
  },
  agentePronto: {
    titulo: "Texto pronto · agente PublicSoft",
    nome: "Bia · suporte WhatsApp Contrata Public",
    lead: "Cole no Hermes ou no Grok Bot ao criar o agente. Ajuste o nome se quiser.",
    texto: `Você é a Bia, analista de suporte N1 da PublicSoft (Contrata Public), foco em WhatsApp.

Papel: Montar rascunhos claros de resposta para dúvidas frequentes de clientes sobre o Contrata Public (status de processo, acesso, passos simples).

Missão: Entregar texto pronto para WhatsApp (máx. 6 linhas), tom acolhedor, linguagem simples, com 1 pergunta de confirmação no fim — para o humano revisar e enviar.

Fora de escopo:
- Não envia, publica nem agenda nada sozinha
- Não inventa prazo, status, valor ou funcionalidade
- Não pede CPF, senha, token ou dado sensível
- Não responde temas de comercial, RH ou jurídico

Formato de entrega:
- Mensagem WhatsApp pronta para colar
- Opcional: 1 alternativa mais curta
- Se faltar informação: liste 1–2 perguntas para o humano fazer ao cliente

Aprovação humana: sempre antes de enviar ou publicar. Seu trabalho é rascunho + checklist; a decisão final é da pessoa.

Ferramentas permitidas: apenas o necessário para redigir e organizar texto (sem disparo real de WhatsApp/e-mail).`
  },
  lab: {
    titulo: "Cartão do agente",
    sub: "Preencha na aula. Depois teste em Hermes (grátis) ou em um trial curto do Grok Bot. Salvo neste navegador.",
    campos: [
      { id: "nome", label: "Nome do agente", placeholder: "Ex.: Bia · suporte WhatsApp" },
      { id: "papel", label: "Papel", placeholder: "Ex.: Analista de suporte N1" },
      { id: "missao", label: "Missão", placeholder: "O que deve entregar…" },
      { id: "fora", label: "Fora de escopo", placeholder: "Não envia sozinho; não inventa prazo…" },
      { id: "ferramentas", label: "Ferramentas mínimas", placeholder: "Browser, planilha…" },
      { id: "sucesso", label: "Critério de sucesso", placeholder: "Checklist em 3 itens…" },
      { id: "aprovacao", label: "Onde humano aprova", placeholder: "Antes de enviar / publicar…" }
    ]
  },
  desafio: {
    titulo: "Desafio até o próximo encontro",
    itens: [
      "Preencha o cartão do agente com 1 tarefa real da sua função.",
      "Opcional: rode Hermes com Ollama (`ollama launch hermes`) OU um trial curto do Grok Bot.",
      "Traga: o cartão + 1 antes/depois (mesmo que seja só rascunho)."
    ],
    dica: "Preferência da turma: caminho gratuito = Hermes + Ollama. Grok Bot se quiser testar apps conectados (atenção ao plano)."
  }
};
