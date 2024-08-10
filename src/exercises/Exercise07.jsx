// Exercise07.js
import React from "react";
import PerguntaResposta from "../components/PerguntaResposta.jsx";

const Exercise07 = () => {
  return (
    <div>
      <h1>Exercise07</h1>
        <PerguntaResposta
            pergunta="O que é um SyntheticEvent?"
            resposta="é um objeto de evento padronizado criado pelo React para lidar com eventos em seus componentes. Ele age como uma camada intermediária entre os eventos nativos do navegador e o código React"
        />
    </div>
  );
};

export default Exercise07;
