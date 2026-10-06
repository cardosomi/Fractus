import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './desafio.module.css';

const questoesPorNivel = {
  Iniciante: [
    {
      pergunta: 'Uma pizza foi dividida em 2 partes iguais. Qual fração representa uma parte?',
      alternativas: ['1/2', '1/3', '2/1', '2/2'],
      correta: 0
    },
    {
      pergunta: 'Em uma fração, o número de baixo mostra em quantas partes o inteiro foi dividido. Como ele se chama?',
      alternativas: ['Numerador', 'Denominador', 'Resultado', 'Inteiro'],
      correta: 1
    },
    {
      pergunta: 'Qual fração representa 3 partes de um total de 4 partes iguais?',
      alternativas: ['1/3', '4/3', '3/4', '3/1'],
      correta: 2
    },
    {
      pergunta: 'Qual fração é maior?',
      alternativas: ['1/4', '1/2', '1/8', '1/10'],
      correta: 1
    },
    {
      pergunta: 'Quanto é 1/4 + 1/4?',
      alternativas: ['1/8', '1/2', '3/8', '1'],
      correta: 1
    }
  ],
  Intermediário: [
    {
      pergunta: 'Quanto é 1/3 + 1/6?',
      alternativas: ['1/2', '2/9', '1/9', '2/3'],
      correta: 0
    },
    {
      pergunta: 'Quanto é 3/4 - 1/4?',
      alternativas: ['1/4', '1/2', '2/4', '3/8'],
      correta: 1
    },
    {
      pergunta: 'Quanto é 2/5 + 1/5?',
      alternativas: ['3/10', '1/5', '3/5', '2/25'],
      correta: 2
    },
    {
      pergunta: 'Quanto é 5/6 - 1/3?',
      alternativas: ['4/3', '1/2', '2/6', '5/3'],
      correta: 1
    },
    {
      pergunta: 'Quanto é 7/8 - 3/8?',
      alternativas: ['4/8', '10/8', '5/8', '3/8'],
      correta: 0
    }
  ],
  Avançado: [
    {
      pergunta: 'Quanto é 2/3 x 3/4?',
      alternativas: ['1/2', '5/7', '2/3', '3/4'],
      correta: 0
    },
    {
      pergunta: 'Quanto é 5/6 dividido por 2/3?',
      alternativas: ['5/9', '5/4', '10/18', '1/4'],
      correta: 1
    },
    {
      pergunta: 'Quanto é 3/5 x 10/9?',
      alternativas: ['2/3', '5/9', '3/10', '1/2'],
      correta: 0
    },
    {
      pergunta: 'Quanto é 7/8 dividido por 7/16?',
      alternativas: ['1/2', '7/2', '2', '16/8'],
      correta: 2
    },
    {
      pergunta: 'Quanto é 4/9 x 3/8?',
      alternativas: ['1/6', '2/9', '7/17', '3/8'],
      correta: 0
    }
  ]
};

const questoesFase2 = [
  {
    pergunta: 'Qual fração é maior: 2/3 ou 3/5?',
    alternativas: ['2/3', '3/5', 'São iguais', 'Não é possível comparar'],
    correta: 0
  },
  {
    pergunta: 'Qual fração é maior: 5/8 ou 2/3?',
    alternativas: ['5/8', '2/3', 'São iguais', '1/2'],
    correta: 1
  },
  {
    pergunta: 'Qual fração é maior: 7/12 ou 5/8?',
    alternativas: ['7/12', '5/8', 'São iguais', '1/2'],
    correta: 1
  },
  {
    pergunta: 'Qual é a menor fração: 3/4, 5/6, 2/3 ou 7/8?',
    alternativas: ['3/4', '5/6', '2/3', '7/8'],
    correta: 2
  },
  {
    pergunta: 'Qual fração é maior: 4/5 ou 7/9?',
    alternativas: ['4/5', '7/9', 'São iguais', '1/2'],
    correta: 0
  }
];

const introducoesPorNivel = {
  Iniciante: {
    titulo: 'O que são frações?',
    texto: 'Imagine uma pizza inteira. Quando dividimos essa pizza em partes iguais, cada pedaço pode ser representado por uma fração.',
    passos: [
      'O número de cima é o numerador: mostra quantas partes foram escolhidas.',
      'O número de baixo é o denominador: mostra em quantas partes iguais o inteiro foi dividido.',
      'Em 1/2, temos 1 parte escolhida de um total de 2 partes iguais.'
    ],
    exemplo: 'Exemplo: 3/4 significa 3 partes escolhidas de um total de 4 partes iguais.',
    video: 'https://youtu.be/SdunkWgD6v8?si=NqJ7n4_qLyTCdoaY'
  },
  Intermediário: {
    titulo: 'Adição e subtração de frações',
    texto: 'Para somar ou subtrair frações, primeiro observe os denominadores. Se forem iguais, mantenha o denominador e opere apenas os numeradores.',
    passos: [
      'Mantenha o denominador, pois as partes têm o mesmo tamanho.',
      'Some ou subtraia os numeradores.',
      'Simplifique o resultado quando for possível.'
    ],
    exemplo: 'Exemplo: 1/4 + 2/4 = 3/4. Na subtração: 5/6 - 2/6 = 3/6 = 1/2.',
    videos: [
      {
        titulo: 'Operações com denominadores iguais',
        link: 'https://youtu.be/w4oCFWwqeUQ?si=NjioDDuoKY5PSwBM'
      },
      {
        titulo: 'Operações com denominadores diferentes',
        link: 'https://youtu.be/Smf9yhSFG5w?si=Km2RHw49DUoZIHwo'
      }
    ]
  },
  Avançado: {
    titulo: 'Multiplicação e divisão de frações',
    texto: 'Na multiplicação, multiplicamos os numeradores entre si e os denominadores entre si. Para dividir, mantemos a primeira fração e multiplicamos pelo inverso da segunda.',
    passos: [
      'Multiplicação: numerador × numerador e denominador × denominador.',
      'Divisão: troque a segunda fração de posição e faça uma multiplicação.',
      'Simplifique a resposta sempre que possível.'
    ],
    exemplo: 'Exemplo: 2/3 × 3/4 = 6/12 = 1/2. Divisão: 5/6 ÷ 2/3 = 5/6 × 3/2 = 5/4.',
    video: 'https://www.youtube.com/results?search_query=multiplica%C3%A7%C3%A3o+e+divis%C3%A3o+de+fra%C3%A7%C3%B5es+aula'
  }
};

const introducaoFase2 = {
  titulo: 'Comparando frações',
  texto: 'Agora vamos descobrir qual fração representa a maior parte, mesmo quando os denominadores são diferentes.',
  passos: [
    'Quando os denominadores são iguais, compare os numeradores: o maior numerador representa a maior fração.',
    'Quando são diferentes, transforme as frações para um denominador comum ou compare-as multiplicando em cruz.',
    'Por exemplo: para comparar 2/3 e 3/5, fazemos 2 × 5 = 10 e 3 × 3 = 9. Como 10 é maior, 2/3 é maior.'
  ],
  exemplo: 'Nesta fase, você vai comparar frações com denominadores iguais e diferentes.',
  video: 'https://www.youtube.com/results?search_query=compara%C3%A7%C3%A3o+de+fra%C3%A7%C3%B5es+aula'
};

function Desafio() {
  const navigate = useNavigate();
  const parametros = new URLSearchParams(window.location.search);
  const fase = parametros.get('fase') === '2' ? 2 : 1;
  const nivelSalvo = localStorage.getItem('nivelAluno');
  const nivel = questoesPorNivel[nivelSalvo] ? nivelSalvo : 'Iniciante';
  const questoes = fase === 2 ? questoesFase2 : questoesPorNivel[nivel];
  const introducao = fase === 2 ? introducaoFase2 : introducoesPorNivel[nivel];

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [introducaoConcluida, setIntroducaoConcluida] = useState(false);
  const faseFinalizada = perguntaAtual >= questoes.length;
  const erros = questoes.length - pontuacao;
  const medalhaId =
    erros === 0
      ? 'ouro'
      : erros === 1
        ? 'prata'
        : erros === 2
          ? 'bronze'
          : null;
  const medalha = medalhaId
    ? {
        ouro: '🥇 Medalha de Ouro',
        prata: '🥈 Medalha de Prata',
        bronze: '🥉 Medalha de Bronze'
      }[medalhaId]
    : null;
  const passou = medalhaId !== null;

  useEffect(() => {
    if (fase === 2 && localStorage.getItem('fase1Concluida') !== 'true') {
      navigate('/fases');
    }
  }, [fase, navigate]);

  useEffect(() => {
    if (faseFinalizada && passou) {
      localStorage.setItem(`fase${fase}Concluida`, 'true');
      localStorage.setItem(`medalhaFase${fase}`, medalhaId);
    }
  }, [fase, faseFinalizada, medalhaId, passou]);

  function responder(indiceEscolhido) {
    if (
      indiceEscolhido ===
      questoes[perguntaAtual].correta
    ) {
      setPontuacao(pontuacao + 1);
    }

    setPerguntaAtual(perguntaAtual + 1);
  }

  if (faseFinalizada) {
    return (
      <div className={styles.container}>
        <div className={styles.cardDesafio}>
          <p>Fase {fase} - Nível {nivel}</p>
          <h1>{passou ? '🏆 Fase Concluída!' : 'Fase não concluída'}</h1>

          <h2>
            Você acertou {pontuacao} de {questoes.length}
          </h2>

          {medalha ? (
            <h3>{medalha}</h3>
          ) : (
            <p>Você precisa conquistar uma medalha para concluir esta fase.</p>
          )}

          {passou && fase === 1 && <p>🔓 Fase 2 desbloqueada!</p>}

          <button
            onClick={() => navigate('/fases')}
          >
            Voltar para Fases
          </button>
        </div>
      </div>
    );
  }

  if (!introducaoConcluida) {
    return (
      <div className={styles.container}>
        <div className={styles.cardDesafio}>
          <p>Fase {fase} - Nível {nivel}</p>
          <h1>{introducao.titulo}</h1>
          <p>{introducao.texto}</p>

          <ol className={styles.passosIntroducao}>
            {introducao.passos.map((passo) => (
              <li key={passo}>{passo}</li>
            ))}
          </ol>

          <p><strong>{introducao.exemplo}</strong></p>

          {introducao.videos ? (
            <div className={styles.videos}>
              {introducao.videos.map((video) => (
                <a
                  className={styles.linkVideo}
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                  key={video.link}
                >
                  {video.titulo}
                </a>
              ))}
            </div>
          ) : (
            <a
              className={styles.linkVideo}
              href={introducao.video}
              target="_blank"
              rel="noreferrer"
            >
              Assistir video aula
            </a>
          )}

          <button onClick={() => setIntroducaoConcluida(true)}>
            Começar fase
          </button>
        </div>
      </div>
    );
  }

  const questao = questoes[perguntaAtual];

  return (
    <div className={styles.container}>
      <div className={styles.cardDesafio}>
        <p>Fase {fase} - Nível {nivel}</p>
        <h1>
          Questão {perguntaAtual + 1} de {questoes.length}
        </h1>

        <h2>{questao.pergunta}</h2>

        <div className={styles.alternativas}>
          {questao.alternativas.map(
            (alternativa, indice) => (
              <button
                key={indice}
                onClick={() => responder(indice)}
              >
                {alternativa}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Desafio;