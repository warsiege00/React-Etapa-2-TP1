// Exercise12.js
import React from "react";
import PerguntaResposta from "../components/PerguntaResposta.jsx";

const Exercise12 = () => {
  return (
    <div>
      <h1>Exercise12</h1>
        <PerguntaResposta
            pergunta="O que são hooks?"
            resposta="Hooks são funções do React que permitem usar estado e outras funcionalidades em componentes funcionais. Eles simplificam o gerenciamento de estado e efeitos colaterais, substituindo a necessidade de classes para esses recursos."
        />
    </div>
  );
};

export default Exercise12;
