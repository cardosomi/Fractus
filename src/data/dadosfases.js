
const fases = {
  Facil: [
    {
      id: 1,
      nome: "Conhecendo as Frações",
      conteudo: "Aprender o numerador e o denominador.Uma fração é formada por dois números: o numerador e o denominador. O numerador fica na parte de cima e indica quantas partes do inteiro estamos considerando. Já o denominador fica na parte de baixo e indica em quantas partes iguais o inteiro foi dividido. Por exemplo, na fração \(\frac{3}{4}\), o número 3 é o numerador, pois representa as três partes consideradas, e o número 4 é o denominador, pois indica que o inteiro foi dividido em quatro partes iguais.",
      questoes: [
        {
          pergunta: "Em 1/2, qual é o numerador?",
          alternativas: ["1", "2", "3", "4"],
          resposta: "1"
        },
        {
          pergunta: "Em quantas partes iguais o inteiro foi dividido em 1/4?",
          alternativas: ["2", "3", "4", "5"],
          resposta: "4"
        },
        {
          pergunta: "Qual fração representa uma de duas partes iguais?",
          alternativas: ["1/3", "1/2", "2/3", "2/4"],
          resposta: "1/2"
        }
      ]
    },
    {
      id: 2,
      nome: "Comparando Frações",
      conteudo: "Comparar frações simples.",
      questoes: [
        {
          pergunta: "Qual é maior?",
          alternativas: ["1/2", "1/4", "São iguais", "Nenhuma"],
          resposta: "1/2"
        },
        {
          pergunta: "Qual é menor?",
          alternativas: ["1/2", "1/3", "1/2 e 1/3 são iguais", "1"],
          resposta: "1/3"
        },
        {
          pergunta: "Qual fração representa uma quantidade maior?",
          alternativas: ["1/5", "1/2", "São iguais", "0/1"],
          resposta: "1/2"
        }
      ]
    },
    {
      id: 3,
      nome: "Somando Frações",
      conteudo: "Introdução à soma de frações.",
      questoes: [
        {
          pergunta: "Quanto é 1/4 + 1/4?",
          alternativas: ["1/2", "2/8", "1/4", "3/4"],
          resposta: "1/2"
        },
        {
          pergunta: "Quanto é 1/3 + 1/3?",
          alternativas: ["1/3", "2/3", "2/6", "1"],
          resposta: "2/3"
        },
        {
          pergunta: "Quanto é 2/5 + 1/5?",
          alternativas: ["3/5", "3/10", "2/5", "1/5"],
          resposta: "3/5"
        }
      ]
    },
    {
      id: 4,
      nome: "Subtraindo Frações",
      conteudo: "Subtração de frações com denominadores iguais.",
      questoes: [
        {
          pergunta: "Quanto é 3/4 - 1/4?",
          alternativas: ["1/4", "2/4", "3/4", "4/4"],
          resposta: "2/4"
        },
        {
          pergunta: "Quanto é 4/5 - 2/5?",
          alternativas: ["1/5", "2/5", "3/5", "4/5"],
          resposta: "2/5"
        },
        {
          pergunta: "Quanto é 3/6 - 1/6?",
          alternativas: ["1/6", "2/6", "3/6", "4/6"],
          resposta: "2/6"
        }
      ]
    },
    {
      id: 5,
      nome: "Frações no Egito",
      conteudo: "Resolver problemas com frações no cotidiano.",
      questoes: [
        {
          pergunta: "Uma barra foi dividida em 4 partes iguais. Foram usadas 2. Qual fração foi usada?",
          alternativas: ["1/4", "2/4", "3/4", "4/4"],
          resposta: "2/4"
        },
        {
          pergunta: "Uma jarra tem 3/5 de água. Qual fração falta para encher?",
          alternativas: ["1/5", "2/5", "3/5", "4/5"],
          resposta: "2/5"
        },
        {
          pergunta: "Qual fração equivale a metade?",
          alternativas: ["1/3", "2/4", "1/5", "3/5"],
          resposta: "2/4"
        }
      ]
    },
    {
      id: 6,
      nome: "Tesouro das Frações",
      conteudo: "Revisão dos conteúdos do nível fácil.",
      questoes: [
        {
          pergunta: "Quanto é 1/2 + 1/2?",
          alternativas: ["1/2", "1", "2/3", "1/4"],
          resposta: "1"
        },
        {
          pergunta: "Quanto é 4/5 - 1/5?",
          alternativas: ["2/5", "3/5", "4/5", "1/5"],
          resposta: "3/5"
        },
        {
          pergunta: "Qual é maior?",
          alternativas: ["1/4", "3/4", "São iguais", "1/8"],
          resposta: "3/4"
        }
      ]
    }
  ],

  Intermediario: [
    {
      id: 1,
      nome: "Frações Equivalentes",
      conteudo: "Identificar frações equivalentes.",
      questoes: [
        {
          pergunta: "Qual fração equivale a 1/2?",
          alternativas: ["2/4", "1/3", "3/5", "2/3"],
          resposta: "2/4"
        }
      ]
    },
    {
      id: 2,
      nome: "Comparação Avançada",
      conteudo: "Comparar frações com denominadores diferentes.",
      questoes: [
        {
          pergunta: "Qual é maior?",
          alternativas: ["2/3", "3/5", "São iguais", "1/5"],
          resposta: "2/3"
        }
      ]
    },
    {
      id: 3,
      nome: "Soma com Denominadores Diferentes",
      conteudo: "Somar frações com denominadores diferentes.",
      questoes: [
        {
          pergunta: "Quanto é 1/2 + 1/4?",
          alternativas: ["2/6", "3/4", "1/4", "1"],
          resposta: "3/4"
        }
      ]
    },
    {
      id: 4,
      nome: "Subtração de Frações",
      conteudo: "Subtrair frações com denominadores diferentes.",
      questoes: [
        {
          pergunta: "Quanto é 3/4 - 1/2?",
          alternativas: ["1/4", "2/4", "1/2", "3/2"],
          resposta: "1/4"
        }
      ]
    },
    {
      id: 5,
      nome: "Multiplicação de Frações",
      conteudo: "Multiplicar numeradores e denominadores.",
      questoes: [
        {
          pergunta: "Quanto é 1/2 × 2/3?",
          alternativas: ["1/3", "2/5", "3/4", "2/3"],
          resposta: "1/3"
        }
      ]
    },
    {
      id: 6,
      nome: "Desafio do Faraó",
      conteudo: "Revisão dos conteúdos intermediários.",
      questoes: [
        {
          pergunta: "Quanto é 2/3 + 1/6?",
          alternativas: ["3/9", "5/6", "1/2", "1"],
          resposta: "5/6"
        }
      ]
    }
  ],

  Avancado: [
    {
      id: 1,
      nome: "Divisão de Frações",
      conteudo: "Dividir frações utilizando o inverso.",
      questoes: [
        {
          pergunta: "Quanto é 1/2 ÷ 1/4?",
          alternativas: ["2", "1/8", "1/2", "4"],
          resposta: "2"
        }
      ]
    },
    {
      id: 2,
      nome: "Operações Combinadas",
      conteudo: "Resolver expressões com frações.",
      questoes: [
        {
          pergunta: "Quanto é 1/2 + 1/3?",
          alternativas: ["2/5", "5/6", "1/6", "3/5"],
          resposta: "5/6"
        }
      ]
    },
    {
      id: 3,
      nome: "Frações e Problemas",
      conteudo: "Resolver situações-problema.",
      questoes: [
        {
          pergunta: "Quanto é 3/4 de 20?",
          alternativas: ["5", "10", "15", "18"],
          resposta: "15"
        }
      ]
    },
    {
      id: 4,
      nome: "Expressões com Frações",
      conteudo: "Resolver expressões com várias operações.",
      questoes: [
        {
          pergunta: "Quanto é 1/2 + 1/4 - 1/8?",
          alternativas: ["5/8", "3/8", "7/8", "1/2"],
          resposta: "5/8"
        }
      ]
    },
    {
      id: 5,
      nome: "Desafio Matemático",
      conteudo: "Aplicar diferentes operações com frações.",
      questoes: [
        {
          pergunta: "Quanto é 2/3 × 3/4?",
          alternativas: ["1/2", "5/7", "2/4", "3/4"],
          resposta: "1/2"
        }
      ]
    },
    {
      id: 6,
      nome: "O Tesouro do Faraó",
      conteudo: "Desafio final do nível avançado.",
      questoes: [
        {
          pergunta: "Quanto é 3/4 ÷ 1/2?",
          alternativas: ["3/8", "3/2", "1/2", "2/3"],
          resposta: "3/2"
        }
      ]
    }
  ]
};

export default fases;
