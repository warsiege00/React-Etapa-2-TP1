// Exercise13.js
import React from "react";
import PerguntaResposta from "../components/PerguntaResposta.jsx";

const Exercise13 = () => {
  return (
    <div>
      <h1>Exercise13</h1>
        <PerguntaResposta
            pergunta="Qual é a função do useState?  "
            resposta="A função useState é usada para adicionar e gerenciar estado em um componente funcional do React. Ela permite criar uma variável de estado e uma função para atualizar seu valor." />
    </div>
  );
};

export default Exercise13;
