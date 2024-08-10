// Exercise02.js
import React from "react";

const Exercise02 = () => {

  const handleCLick = () => {
    alert("Hello World by function");
  }

  return (
    <div>
      <h1>Exercise02</h1>
      <p>Content for Exercise02</p>

      <button onClick={handleCLick}>Ver mensagem</button>
    </div>
  );
};

export default Exercise02;
