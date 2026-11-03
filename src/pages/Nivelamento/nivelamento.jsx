import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import { saveProfile } from '../../api';

const questoes = [
  {
    dificuldade: 'Fácil',
    pergunta: 'Qual fração representa metade?',
    alternativas: ['1/3', '1/2', '2/3', '3/4'],
    correta: 1
  },
  {
    dificuldade: 'Fácil',
    pergunta: 'Qual fração é maior?',
    alternativas: ['1/4', '1/2', '1/8', '1/10'],
    correta: 1
  },
  {
    dificuldade: 'Fácil',
    pergunta: 'Quanto é 1/4 + 1/4?',
    alternativas: ['1/8', '1/2', '2/8', '1'],
    correta: 1
  },
  {
    dificuldade: 'Difícil',
    pergunta: 'Quanto é 2/3 + 1/6?',
    alternativas: ['3/9', '4/6', '5/6', '1'],
    correta: 2
  },
  {
    dificuldade: 'Difícil',
    pergunta: 'Quanto é 3/4 - 2/5?',
    alternativas: ['1/20', '7/20', '1/2', '5/9'],
    correta: 1
  },
  {
    dificuldade: 'Difícil',
    pergunta: 'Qual fração é equivalente a 4/6?',
    alternativas: ['1/2', '2/3', '3/4', '4/8'],
    correta: 1
  }
];

function descobrirNivel(pontos) {
  if (pontos <= 2) return 'Iniciante';
  if (pontos <= 4) return 'Intermediário';
  return 'Avançado';
}

function Nivelamento() {
  const navigate = useNavigate();
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [salvando, setSalvando] = useState(false);
  const [erroSalvar, setErroSalvar] = useState('');

  const finalizado = questaoAtual >= questoes.length;
  const nivel = descobrirNivel(pontuacao);

  async function responder(indiceEscolhido) {
    const acertou =
      indiceEscolhido === questoes[questaoAtual].correta;

    const novaPontuacao = pontuacao + (acertou ? 1 : 0);
    const proximaQuestao = questaoAtual + 1;

    if (proximaQuestao === questoes.length) {
      const nivelFinal = descobrirNivel(novaPontuacao);
      const nivelJogo = {
        Iniciante: 'Facil',
        'Intermediário': 'Intermediario',
        'Avançado': 'Avancado'
      }[nivelFinal];

      setSalvando(true);
      setErroSalvar('');
      try {
        await saveProfile({ level: nivelJogo });
      } catch (error) {
        setErroSalvar(error.message);
        return;
      } finally {
        setSalvando(false);
      }

      setPontuacao(novaPontuacao);
    } else {
      setPontuacao(novaPontuacao);
    }

    setQuestaoAtual(proximaQuestao);
  }

  if (finalizado) {
    return (
      <>
        <Header />

        <main className="nivelamento">
          <div className="nivelamento-card">
            <h1>Nivelamento concluído!</h1>
            <h2>Seu nível é: {nivel}</h2>

            <p>
              Você acertou {pontuacao} de {questoes.length} questões.
            </p>

            {erroSalvar && (
              <p role="alert">
                Não foi possível salvar seu nível no servidor: {erroSalvar}.
                Volte à última questão e tente responder novamente.
              </p>
            )}
            <button
              className="botao-iniciar"
              onClick={() => navigate('/fases')}
              disabled={Boolean(erroSalvar)}
            >
              Ir para fases
            </button>
          </div>
        </main>
      </>
    );
  }

  const questao = questoes[questaoAtual];

  return (
    <>
      <Header />

      <main className="nivelamento">
        <div className="nivelamento-card">
          <h1>Teste de nivelamento</h1>

          <p>
            Responda às questões para descobrirmos
            seu nível de aprendizado em frações.
          </p>

          <h2>
            Questão {questaoAtual + 1} de {questoes.length}
          </h2>

          <h2>{questao.pergunta}</h2>

          <div className="nivelamento-alternativas">
            {questao.alternativas.map((alternativa, indice) => (
              <button
                key={alternativa}
                onClick={() => responder(indice)}
                disabled={salvando}
              >
                {alternativa}
              </button>
            ))}
          </div>
          {erroSalvar && (
            <p role="alert">
              Não foi possível salvar seu nível: {erroSalvar}. Selecione uma resposta
              novamente para tentar salvar.
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default Nivelamento;