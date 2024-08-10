// Exercise14.js
import React from "react";
import PerguntaResposta from "../components/PerguntaResposta.jsx";

const Exercise14 = () => {
  return (
    <div>
      <h1>Exercise14</h1>
        <PerguntaResposta
            pergunta="Qual é a função do useEffect?"
            resposta="A função useEffect é usada para executar efeitos colaterais em um componente funcional, como buscar dados, manipular o DOM ou configurar assinaturas. Ele pode ser configurado para rodar após cada renderização, apenas uma vez, ou quando certas dependências mudam." />

    </div>
  );
};

export default Exercise14;
