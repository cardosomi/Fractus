import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './desafio.module.css';
import dadosFases from '../../data/dadosfases';

function Desafio() {
  const navigate = useNavigate();
  const parametros = new URLSearchParams(window.location.search);

  const faseInformada = Number(parametros.get('fase'));
  const fase =
    Number.isInteger(faseInformada) &&
    faseInformada >= 1 &&
    faseInformada <= 6
      ? faseInformada
      : 1;

  // O nível é definido pelo teste de nivelamento.
  const nivelSalvo = localStorage.getItem('nivelAluno') || 'Iniciante';

  const nomesDosNiveis = {
    'Iniciante': 'Facil',
    'Intermediário': 'Intermediario',
    'Avançado': 'Avancado'
  };

  const nivel = nomesDosNiveis[nivelSalvo] || 'Facil';

  const nomesExibicao = {
    Facil: 'Iniciante',
    Intermediario: 'Intermediário',
    Avancado: 'Avançado'
  };

  // Busca a fase diretamente no arquivo de dados.
  const fasesDoNivel = dadosFases[nivel] || dadosFases.Facil;
  const dadosDaFase = fasesDoNivel.find((item) => item.id === fase);

  const questoes = dadosDaFase?.questoes || [];

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

  // Cada nível tem seu próprio progresso.
  const chaveConclusao = `fase${fase}Concluida_${nivel}`;
  const chaveMedalha = `medalhaFase${fase}_${nivel}`;

  useEffect(() => {
    if (fase > 1) {
      const faseAnteriorConcluida =
        localStorage.getItem(
          `fase${fase - 1}Concluida_${nivel}`
        ) === 'true';

      if (!faseAnteriorConcluida) {
        navigate('/fases', { replace: true });
      }
    }
  }, [fase, nivel, navigate]);

  useEffect(() => {
    if (faseFinalizada && passou) {
      localStorage.setItem(chaveConclusao, 'true');
      localStorage.setItem(chaveMedalha, medalhaId);
    }
  }, [
    faseFinalizada,
    passou,
    chaveConclusao,
    chaveMedalha,
    medalhaId
  ]);

  function responder(indiceEscolhido) {
    const questao = questoes[perguntaAtual];
    const alternativaEscolhida = questao.alternativas[indiceEscolhido];

    // No dadosfases.js, a resposta correta é armazenada como texto.
    if (alternativaEscolhida === questao.resposta) {
      setPontuacao((pontuacaoAtual) => pontuacaoAtual + 1);
    }

    setPerguntaAtual((perguntaAtual) => perguntaAtual + 1);
  }

  if (!dadosDaFase || questoes.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.cardDesafio}>
          <h1>Fase não encontrada</h1>
          <p>Não foi possível carregar o conteúdo desta fase.</p>
          <button onClick={() => navigate('/fases')}>
            Voltar para Fases
          </button>
        </div>
      </div>
    );
  }

  if (faseFinalizada) {
    return (
      <div className={styles.container}>
        <div className={styles.cardDesafio}>
          <p>
            Fase {fase} - Nível {nomesExibicao[nivel]}
          </p>

          <h1>
            {passou ? '🏆 Fase Concluída!' : 'Fase não concluída'}
          </h1>

          <h2>
            {dadosDaFase.nome}
          </h2>

          <p>
            Você acertou {pontuacao} de {questoes.length} questões.
          </p>

          {medalha ? (
            <h3>{medalha}</h3>
          ) : (
            <p>
              Você precisa acertar mais questões para conquistar uma medalha.
              Tente novamente!
            </p>
          )}

          {passou && fase < 6 && (
            <p>🔓 Você desbloqueou a próxima fase!</p>
          )}

          {passou && fase === 6 && (
            <p>🎉 Você concluiu todas as fases deste nível!</p>
          )}

          <button onClick={() => navigate('/fases')}>
            Voltar para Fases
          </button>

          {!passou && (
            <button
              onClick={() => window.location.reload()}
            >
              Tentar novamente
            </button>
          )}
        </div>
      </div>
    );
  }

  if (!introducaoConcluida) {
    return (
      <div className={styles.container}>
        <div className={styles.cardDesafio}>
          <p>
            Fase {fase} - Nível {nomesExibicao[nivel]}
          </p>

          <h1>{dadosDaFase.nome}</h1>

          <p>{dadosDaFase.conteudo}</p>

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
        <p>
          Fase {fase} - Nível {nomesExibicao[nivel]}
        </p>

        <h1>
          Questão {perguntaAtual + 1} de {questoes.length}
        </h1>

        <h2>{questao.pergunta}</h2>

        <div className={styles.alternativas}>
          {questao.alternativas.map((alternativa, indice) => (
            <button
              key={indice}
              onClick={() => responder(indice)}
            >
              {alternativa}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Desafio;