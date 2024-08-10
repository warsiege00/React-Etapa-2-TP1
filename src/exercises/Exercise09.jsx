// Exercise09.js
import React from "react";
import PerguntaResposta from "../components/PerguntaResposta.jsx";

const Exercise09 = () => {
  return (
    <div>
      <h1>Exercise09</h1>
        <PerguntaResposta
            pergunta="Quais são as desvantagens de se colocar funções de seta inline para o tratamento de eventos?"
            resposta="As desvantagens são: a criação de novas funções a cada renderização, o que pode afetar a performance; dificuldade em otimizar re-renderizações desnecessárias; e código menos claro, especialmente em componentes maiores."
        />
    </div>
  );
};

export default Exercise09;
