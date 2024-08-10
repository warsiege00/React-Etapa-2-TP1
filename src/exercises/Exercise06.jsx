// Exercise06.js
import React from "react";
import PerguntaResposta from "../components/PerguntaResposta.jsx";

const Exercise06 = () => {
  return (
    <div>
      <h1>Exercise06</h1>
        <PerguntaResposta
            pergunta="Qual é a diferença de passar o handleClick e chamar o handleClick"
            resposta="Passar a função faz ela ser executada quando o botão for clicado. Chamar a função faz ela ser executada na hora em que o componente é montado"
        />
    </div>
  );
};

export default Exercise06;
