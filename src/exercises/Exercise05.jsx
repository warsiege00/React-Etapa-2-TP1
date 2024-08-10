// Exercise05.js
import React from "react";
import PerguntaResposta from "../components/PerguntaResposta.jsx";

const Exercise05 = () => {
  return (
      <div>
          <h1>Exercise05</h1>
          <div>
              <PerguntaResposta
                  pergunta="O que é React?"
                  resposta="React é uma biblioteca JavaScript para construir interfaces de usuário."
              />
              <PerguntaResposta
                  pergunta="O que é JSX?"
                  resposta="JSX é uma extensão de sintaxe para JavaScript que permite escrever HTML dentro de arquivos JavaScript."
              />
          </div>
      </div>
  );
};

export default Exercise05;
