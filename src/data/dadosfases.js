
const fases = {
  Facil: [
    {
      id: 1,
      nome: "Conhecendo as Frações",
      conteudo: "Aprender o numerador e o denominador. Uma fração é formada por dois números: o numerador e o denominador. O numerador fica na parte de cima e indica quantas partes do inteiro estamos considerando. Já o denominador fica na parte de baixo e indica em quantas partes iguais o inteiro foi dividido. Por exemplo, na fração 3/4, o número 3 é o numerador, pois representa as três partes consideradas, e o número 4 é o denominador, pois indica que o inteiro foi dividido em quatro partes iguais.",
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
      conteudo: "Comparar frações significa descobrir qual representa a maior ou a menor quantidade. Quando duas frações possuem o mesmo denominador, basta observar os numeradores: a fração com o maior numerador representa a maior quantidade. Quando os numeradores são iguais, a fração com o menor denominador representa a maior quantidade. Por exemplo, 3/5 é maior que 2/5, pois representa mais partes de um mesmo inteiro. Comparar frações ajuda a entender diferentes quantidades e identificar suas diferenças.",
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
      conteudo: "Somar frações significa juntar partes de um inteiro para descobrir uma quantidade total. Quando as frações possuem denominadores iguais, somamos os numeradores e mantemos o denominador. Por exemplo, se juntarmos 2/7 e 3/7, teremos cinco partes de um total de sete. Quando os denominadores são diferentes, precisamos encontrar um denominador comum antes de realizar a soma. Essa operação é muito utilizada em situações de divisão e união de quantidades.",
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
      conteudo: "Subtrair frações significa retirar uma quantidade de outra para descobrir quanto restou. Quando as frações possuem o mesmo denominador, subtraímos os numeradores e mantemos o denominador. Por exemplo, imagine uma caixa dividida em oito partes iguais, das quais cinco estão ocupadas. Se retirarmos duas partes, será necessário calcular quantas continuam ocupadas. Quando os denominadores são diferentes, primeiro precisamos encontrar um denominador comum.",
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
      conteudo: "As frações fazem parte da matemática desde as civilizações antigas e eram muito utilizadas no Egito Antigo. Os egípcios utilizavam frações para medir terras, repartir alimentos, calcular quantidades e organizar construções. No cotidiano, também encontramos frações ao dividir uma fruta, repartir uma quantidade de água ou medir ingredientes de uma receita. Uma fração representa uma ou mais partes de um inteiro que foi dividido em partes iguais. Assim, podemos utilizar esse conhecimento para resolver situações do dia a dia.",
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
      conteudo: "As frações podem ser utilizadas em diferentes operações matemáticas, como adição, subtração e comparação. Para resolver esses cálculos, é importante compreender o significado do numerador e do denominador e conhecer as regras de cada operação. A adição permite juntar quantidades, a subtração permite retirar partes e a comparação ajuda a identificar qual fração representa uma quantidade maior ou menor. Nesta etapa, você poderá revisar esses conhecimentos e colocar em prática tudo o que aprendeu.",
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
    questoes: [
      {
        pergunta: "Qual fração equivale a 1/2?",
        alternativas: ["2/4", "1/3", "3/5", "2/3"],
        resposta: "2/4"
      },
      {
        pergunta: "Qual fração equivale a 3/4?",
        alternativas: ["4/6", "6/8", "3/8", "5/6"],
        resposta: "6/8"
      },
      {
        pergunta: "Qual fração representa a mesma quantidade que 2/5?",
        alternativas: ["4/10", "3/10", "2/10", "5/8"],
        resposta: "4/10"
      },
      {
        pergunta: "A fração 9/12 pode ser simplificada para qual fração?",
        alternativas: ["2/3", "3/4", "4/5", "1/2"],
        resposta: "3/4"
      },
      {
        pergunta: "Qual das alternativas apresenta uma fração equivalente a 4/6?",
        alternativas: ["2/3", "3/5", "4/8", "5/6"],
        resposta: "2/3"
      }
    ]
  },
  {
    id: 2,
    nome: "Comparação Avançada",
    questoes: [
      {
        pergunta: "Qual é maior?",
        alternativas: ["2/3", "3/5", "São iguais", "1/5"],
        resposta: "2/3"
      },
      {
        pergunta: "Qual é menor?",
        alternativas: ["3/4", "2/5", "5/6", "7/8"],
        resposta: "2/5"
      },
      {
        pergunta: "Qual fração representa a maior quantidade?",
        alternativas: ["4/5", "5/8", "3/4", "2/3"],
        resposta: "4/5"
      },
      {
        pergunta: "Compare 5/6 e 7/9. Qual é maior?",
        alternativas: ["5/6", "7/9", "São iguais", "1/2"],
        resposta: "5/6"
      },
      {
        pergunta: "Qual é a ordem crescente correta das frações 1/2, 2/3 e 3/4?",
        alternativas: [
          "1/2, 2/3, 3/4",
          "3/4, 2/3, 1/2",
          "2/3, 1/2, 3/4",
          "1/2, 3/4, 2/3"
        ],
        resposta: "1/2, 2/3, 3/4"
      }
    ]
  },
  {
    id: 3,
    nome: "Soma com Denominadores Diferentes",
    questoes: [
      {
        pergunta: "Quanto é 1/2 + 1/4?",
        alternativas: ["2/6", "3/4", "1/4", "1"],
        resposta: "3/4"
      },
      {
        pergunta: "Quanto é 1/3 + 1/6?",
        alternativas: ["2/9", "1/2", "2/6", "3/6"],
        resposta: "1/2"
      },
      {
        pergunta: "Quanto é 2/5 + 1/10?",
        alternativas: ["3/15", "1/2", "3/10", "2/10"],
        resposta: "1/2"
      },
      {
        pergunta: "Quanto é 3/8 + 1/4?",
        alternativas: ["4/12", "5/8", "4/8", "7/8"],
        resposta: "5/8"
      },
      {
        pergunta: "Quanto é 2/3 + 3/4?",
        alternativas: ["5/7", "17/12", "13/12", "1"],
        resposta: "17/12"
      }
    ]
  },
  {
    id: 4,
    nome: "Subtração de Frações",
    questoes: [
      {
        pergunta: "Quanto é 3/4 - 1/2?",
        alternativas: ["1/4", "2/4", "1/2", "3/2"],
        resposta: "1/4"
      },
      {
        pergunta: "Quanto é 5/6 - 1/3?",
        alternativas: ["4/3", "1/2", "2/6", "3/6"],
        resposta: "1/2"
      },
      {
        pergunta: "Quanto é 7/8 - 1/4?",
        alternativas: ["5/8", "6/8", "3/4", "1/2"],
        resposta: "5/8"
      },
      {
        pergunta: "Quanto é 4/5 - 1/10?",
        alternativas: ["3/10", "7/10", "2/5", "9/10"],
        resposta: "7/10"
      },
      {
        pergunta: "Quanto é 5/6 - 1/4?",
        alternativas: ["7/12", "4/10", "3/12", "2/3"],
        resposta: "7/12"
      }
    ]
  },
  {
    id: 5,
    nome: "Multiplicação de Frações",
    questoes: [
      {
        pergunta: "Quanto é 1/2 × 2/3?",
        alternativas: ["1/3", "2/5", "3/4", "2/3"],
        resposta: "1/3"
      },
      {
        pergunta: "Quanto é 2/5 × 3/4?",
        alternativas: ["6/20", "5/9", "3/5", "2/9"],
        resposta: "6/20"
      },
      {
        pergunta: "Quanto é 3/7 × 2/3?",
        alternativas: ["6/21", "5/10", "3/7", "2/7"],
        resposta: "6/21"
      },
      {
        pergunta: "Quanto é 4/5 × 5/8?",
        alternativas: ["20/40", "9/13", "4/8", "5/8"],
        resposta: "20/40"
      },
      {
        pergunta: "Quanto é 3/4 × 2/5?",
        alternativas: ["6/20", "5/9", "3/10", "2/4"],
        resposta: "6/20"
      }
    ]
  },
  {
    id: 6,
    nome: "Desafio do Faraó",
    questoes: [
      {
        pergunta: "Quanto é 2/3 + 1/6?",
        alternativas: ["3/9", "5/6", "1/2", "1"],
        resposta: "5/6"
      },
      {
        pergunta: "Quanto é 3/4 × 2/3?",
        alternativas: ["1/2", "5/7", "6/7", "2/3"],
        resposta: "1/2"
      },
      {
        pergunta: "Qual fração é equivalente a 5/8?",
        alternativas: ["10/16", "5/12", "8/10", "15/20"],
        resposta: "10/16"
      },
      {
        pergunta: "Quanto é 7/10 - 1/5?",
        alternativas: ["5/10", "6/10", "3/5", "1/2"],
        resposta: "1/2"
      },
      {
        pergunta: "Um explorador percorreu 2/5 de uma trilha pela manhã e 1/4 à tarde. Qual fração da trilha ele percorreu ao todo?",
        alternativas: ["3/9", "13/20", "2/9", "3/5"],
        resposta: "13/20"
      }
    ]
  }
],

  Avancado: [
  {
    id: 1,
    nome: "Divisão de Frações",
    questoes: [
      {
        pergunta: "Quanto é 1/2 ÷ 1/4?",
        alternativas: ["2", "1/8", "1/2", "4"],
        resposta: "2"
      },
      {
        pergunta: "Quanto é 2/3 ÷ 1/3?",
        alternativas: ["2", "1/9", "3", "1/2"],
        resposta: "2"
      },
      {
        pergunta: "Quanto é 3/4 ÷ 2/5?",
        alternativas: ["15/8", "6/20", "5/6", "8/15"],
        resposta: "15/8"
      },
      {
        pergunta: "Quanto é 5/6 ÷ 2/3?",
        alternativas: ["5/4", "10/18", "3/4", "4/5"],
        resposta: "5/4"
      },
      {
        pergunta: "Uma fita de 3/4 de metro será cortada em pedaços de 1/8 de metro. Quantos pedaços serão obtidos?",
        alternativas: ["4", "5", "6", "8"],
        resposta: "6"
      }
    ]
  },
  {
    id: 2,
    nome: "Operações Combinadas",
    questoes: [
      {
        pergunta: "Quanto é 1/2 + 1/3?",
        alternativas: ["2/5", "5/6", "1/6", "3/5"],
        resposta: "5/6"
      },
      {
        pergunta: "Quanto é 1/2 + 1/4 × 2?",
        alternativas: ["1", "3/4", "5/8", "2"],
        resposta: "1"
      },
      {
        pergunta: "Quanto é (2/3 + 1/6) - 1/2?",
        alternativas: ["1/3", "2/3", "1/2", "5/6"],
        resposta: "1/3"
      },
      {
        pergunta: "Quanto é 3/4 ÷ 1/2 + 1/4?",
        alternativas: ["7/4", "5/4", "1", "3/8"],
        resposta: "7/4"
      },
      {
        pergunta: "Quanto é (2/5 × 3/4) + 1/10?",
        alternativas: ["2/5", "4/5", "7/10", "1/2"],
        resposta: "2/5"
      }
    ]
  },
  {
    id: 3,
    nome: "Frações e Problemas",
    questoes: [
      {
        pergunta: "Quanto é 3/4 de 20?",
        alternativas: ["5", "10", "15", "18"],
        resposta: "15"
      },
      {
        pergunta: "Uma escola possui 120 alunos. Se 2/3 participam de uma atividade, quantos alunos participam?",
        alternativas: ["60", "70", "80", "90"],
        resposta: "80"
      },
      {
        pergunta: "Um reservatório possui 90 litros de água. Foram utilizados 2/5 dessa quantidade. Quantos litros foram utilizados?",
        alternativas: ["18", "36", "45", "54"],
        resposta: "36"
      },
      {
        pergunta: "Uma viagem possui 240 quilômetros. Um motorista percorreu 3/8 do trajeto. Quantos quilômetros ainda faltam?",
        alternativas: ["90 km", "120 km", "150 km", "180 km"],
        resposta: "150 km"
      },
      {
        pergunta: "Uma receita utiliza 3/4 de quilograma de farinha. Para preparar metade da receita, quanto será necessário?",
        alternativas: ["3/8 kg", "1/2 kg", "2/4 kg", "3/2 kg"],
        resposta: "3/8 kg"
      }
    ]
  },
  {
    id: 4,
    nome: "Expressões com Frações",
    questoes: [
      {
        pergunta: "Quanto é 1/2 + 1/4 - 1/8?",
        alternativas: ["5/8", "3/8", "7/8", "1/2"],
        resposta: "5/8"
      },
      {
        pergunta: "Quanto é (3/4 + 1/2) × 2/5?",
        alternativas: ["1/2", "3/5", "5/8", "2/3"],
        resposta: "1/2"
      },
      {
        pergunta: "Quanto é 2/3 - (1/4 × 2/3)?",
        alternativas: ["1/2", "1/3", "5/6", "2/9"],
        resposta: "1/2"
      },
      {
        pergunta: "Quanto é (5/6 - 1/3) ÷ 1/2?",
        alternativas: ["1", "1/2", "2/3", "3/2"],
        resposta: "1"
      },
      {
        pergunta: "Quanto é (1/2 + 1/3) ÷ 5/6?",
        alternativas: ["1", "5/6", "2/3", "3/2"],
        resposta: "1"
      }
    ]
  },
  {
    id: 5,
    nome: "Desafio Matemático",
    questoes: [
      {
        pergunta: "Quanto é 2/3 × 3/4?",
        alternativas: ["1/2", "5/7", "2/4", "3/4"],
        resposta: "1/2"
      },
      {
        pergunta: "Quanto é 5/6 ÷ 10/12?",
        alternativas: ["1", "2", "1/2", "5/12"],
        resposta: "1"
      },
      {
        pergunta: "Quanto é 3/5 + 2/3 - 1/2?",
        alternativas: ["23/30", "19/30", "1/2", "7/10"],
        resposta: "23/30"
      },
      {
        pergunta: "Qual é o resultado de 4/5 × 15/16?",
        alternativas: ["3/4", "4/5", "5/8", "1/2"],
        resposta: "3/4"
      },
      {
        pergunta: "Um explorador tinha 5/6 de uma barra de ouro e entregou 2/5 dessa quantidade. Qual fração da barra ele entregou?",
        alternativas: ["1/3", "2/5", "3/6", "5/12"],
        resposta: "1/3"
      }
    ]
  },
{
  id: 6,
  nome: "O Tesouro do Faraó",
  conteudo: "Você chegou ao desafio final da jornada das frações! Nesta etapa, será necessário utilizar todos os conhecimentos desenvolvidos durante os níveis anteriores. As frações podem aparecer em cálculos simples, expressões com várias operações e situações-problema. Para resolver os desafios, é importante dominar as regras de adição, subtração, multiplicação e divisão, além de saber simplificar frações e respeitar a ordem das operações. Leia cada questão com atenção, organize seus cálculos e utilize seu raciocínio matemático para conquistar o tesouro do Faraó!",
  questoes: [
    {
      pergunta: "Quanto é 3/4 ÷ 1/2?",
      alternativas: ["3/8", "3/2", "1/2", "2/3"],
      resposta: "3/2"
    },
    {
      pergunta: "Um explorador encontrou 1/2 de um mapa e depois encontrou mais 1/4. Qual fração do mapa ele encontrou ao todo?",
      alternativas: ["2/6", "3/4", "1/4", "2/4"],
      resposta: "3/4"
    },
    {
      pergunta: "Uma caixa possui 5/6 de ouro. O explorador utilizou 1/3 dessa quantidade. Quanto ouro foi utilizado?",
      alternativas: ["5/18", "4/6", "1/2", "5/9"],
      resposta: "5/18"
    },
    {
      pergunta: "Uma pedra preciosa pesa 3/4 de quilograma. Ela será dividida igualmente entre 3 exploradores. Quanto cada um receberá?",
      alternativas: ["1/4 kg", "3/7 kg", "1/2 kg", "2/4 kg"],
      resposta: "1/4 kg"
    },
    {
      pergunta: "O Faraó possuía 7/8 de uma barra de ouro. Ele entregou 1/4 para um guardião. Quanto restou?",
      alternativas: ["5/8", "6/8", "3/8", "1/2"],
      resposta: "5/8"
    },
    {
      pergunta: "Uma sala do tesouro possui 2/3 de suas paredes pintadas de dourado. Depois, os trabalhadores pintaram mais 1/6. Qual fração representa a parte pintada?",
      alternativas: ["3/9", "5/6", "4/6", "2/6"],
      resposta: "5/6"
    },
    {
      pergunta: "Um explorador encontrou 24 moedas. Ele entregou 1/3 das moedas ao Faraó e depois utilizou 1/4 do total para comprar comida. Quantas moedas sobraram?",
      alternativas: ["10", "12", "14", "16"],
      resposta: "10"
    },
    {
      pergunta: "Para abrir o último portão, o explorador precisa resolver: (1/2 + 1/4) ÷ 3/2. Qual é o resultado?",
      alternativas: ["1/2", "3/4", "1/4", "2/3"],
      resposta: "1/2"
    }
  ]
}

      ]
    };

export default fases;
