// Exercise15.js
import React from "react";
import PerguntaResposta from "../components/PerguntaResposta.jsx";

const Exercise15 = () => {
  return (
    <div>
    <h1>Exercise15</h1>
        <PerguntaResposta
            pergunta="Qual é a função do useMemo? "
            resposta="A função useMemo é usada para otimizar o desempenho, memorizando o resultado de uma função cara e evitando cálculos desnecessários. Ela só recalcula o valor quando as dependências mudam."/>
    </div>
  );
};

export default Exercise15;
