import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './desafio.module.css';

function Desafio() {
  const navigate = useNavigate();

  const questoes = [
    {
      pergunta: 'Qual fração representa metade de uma pizza?',
      alternativas: ['1/4', '1/2', '3/4', '2/3'],
      correta: 1
    },
    {
      pergunta: 'Qual fração representa um quarto?',
      alternativas: ['1/2', '1/4', '3/4', '2/4'],
      correta: 1
    },
    {
      pergunta: 'Qual fração é maior?',
      alternativas: ['1/3', '1/2'],
      correta: 1
    },
    {
      pergunta: 'Quanto é 1/4 + 1/4?',
      alternativas: ['1/2', '1/4', '3/4', '1'],
      correta: 0
    },
    {
      pergunta: 'Quanto é 3/4 - 1/4?',
      alternativas: ['1/4', '2/4', '3/4', '1'],
      correta: 1
    }
  ];

  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);

  function responder(indiceEscolhido) {
    if (
      indiceEscolhido ===
      questoes[perguntaAtual].correta
    ) {
      setPontuacao(pontuacao + 1);
    }

    setPerguntaAtual(perguntaAtual + 1);
  }

  if (perguntaAtual >= questoes.length) {
    return (
      <div className="container">
        <div className="card-desafio">
          <h1>🏆 Fase Concluída!</h1>

          <h2>
            Você acertou {pontuacao} de {questoes.length}
          </h2>

          <p>🔓 Fase 2 desbloqueada!</p>

          {pontuacao === 5 && <h3>⭐⭐⭐ Excelente!</h3>}
          {pontuacao === 4 && <h3>⭐⭐ Muito bom!</h3>}
          {pontuacao === 3 && <h3>⭐ Bom trabalho!</h3>}

          <button
            onClick={() => navigate('/fases')}
          >
            Voltar para Fases
          </button>
        </div>
      </div>
    );
  }

  const questao = questoes[perguntaAtual];

  return (
    <div className="container">
      <div className="card-desafio">
        <h1>
          Questão {perguntaAtual + 1} de {questoes.length}
        </h1>

        <h2>{questao.pergunta}</h2>

        <div className="alternativas">
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