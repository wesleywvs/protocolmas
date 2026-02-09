
import { Question } from './types';

export const QUESTIONS: Question[] = [
  // Fase 1
  {
    id: 1,
    fase: "Segmentação",
    text: "Qual sua idade?",
    options: ["18-24", "25-34", "35-44", "45-54", "55+"]
  },
  {
    id: 2,
    fase: "Segmentação",
    text: "Qual o seu principal objetivo hoje?",
    options: ["Durar mais tempo na cama", "Ter ereções mais fortes", "Aumentar o tamanho", "Recuperar a libido"]
  },
  // Fase 2
  {
    id: 3,
    fase: "Diagnóstico",
    text: "Há quanto tempo você sente que não está na sua melhor performance?",
    options: ["Menos de 6 meses", "1 a 3 anos", "Mais de 3 anos", "Sempre tive dificuldades"]
  },
  {
    id: 4,
    fase: "Diagnóstico",
    text: "Quando você tenta controlar a ejaculação, o que acontece?",
    options: ["Não consigo segurar", "Consigo segurar parando mas perco a ereção", "Sinto muita sensibilidade", "Fico ansioso e acabo logo"]
  },
  {
    id: 5,
    fase: "Diagnóstico",
    text: "Você diria que sua ansiedade antes do sexo é:",
    options: ["Baixa", "Média", "Alta", "Extrema"]
  },
  {
    id: 6,
    fase: "Diagnóstico",
    text: "Sobre sua rotina, você:",
    options: ["É sedentário e estressado", "Faz exercícios mas vive estressado", "Tem uma vida equilibrada"]
  },
  {
    id: 7,
    fase: "Diagnóstico",
    text: "Você tem algum problema de saúde diagnosticado?",
    options: ["Sim", "Não", "Prefiro não dizer"]
  },
  // Fase 3
  {
    id: 8,
    fase: "Micro-Comprometimento",
    text: "Você já tentou \"pensar em coisas chatas\" para durar mais?",
    options: ["Sim e funcionou pouco", "Sim e perdi a ereção", "Não"]
  },
  {
    id: 9,
    fase: "Micro-Comprometimento",
    text: "Você já usou preservativos \"retardantes\" ou pomadas?",
    options: ["Sim mas tiram a sensibilidade", "Não gosto", "Nunca usei"]
  },
  {
    id: 10,
    fase: "Micro-Comprometimento",
    text: "Qual a maior barreira para você buscar ajuda até hoje?",
    options: ["Vergonha", "Medo de remédios", "Ceticismo", "Preço"]
  },
  {
    id: 11,
    fase: "Micro-Comprometimento",
    text: "Se eu te dissesse que existe uma \"falha biológica\" (Curto-Circuito Neural) que causa sua rapidez, isso faria sentido?",
    options: ["Total sentido", "Talvez", "Não sei"]
  },
  // Fase 4
  {
    id: 12,
    fase: "Ouro (Define o Resultado)",
    text: "Qual frase descreve melhor sua situação atual?",
    options: [
      "\"Eu fico duro, mas gozo muito rápido.\"",
      "\"Eu demoro para ficar duro e perco a ereção.\"",
      "\"Eu fico nervoso só de pensar em sexo.\"",
      "\"Eu quero impressionar com mais potência.\""
    ]
  },
  // Fase 5
  {
    id: 13,
    fase: "Fechamento",
    text: "Você está em um relacionamento sério atualmente?",
    options: ["Sim", "Não"]
  },
  {
    id: 14,
    fase: "Fechamento",
    text: "O quanto resolver isso é importante para você agora (0 a 10)?",
    options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    type: 'scale'
  },
  {
    id: 15,
    fase: "Fechamento",
    text: "Você prefere um método que atue:",
    options: ["No Sintoma (Remédios)", "Na Causa Raiz (Reeducação)"]
  },
  {
    id: 16,
    fase: "Fechamento",
    text: "Você sabia que existe um músculo específico que controla 80% da sua ejaculação e quase ninguém treina ele?",
    options: ["Não sabia", "Já ouvi falar"]
  },
  {
    id: 17,
    fase: "Fechamento",
    text: "Podemos gerar seu diagnóstico personalizado e te mostrar o passo a passo?",
    options: ["Sim, gerar meu plano agora!"],
    type: 'cta'
  }
];
