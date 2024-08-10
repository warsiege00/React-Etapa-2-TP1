// Exercise10.js
import React, {useEffect} from "react";

const Exercise10 = () => {
    useEffect(() => {
        alert('O componente foi renderizado!');
    });
  return (
    <div>
      <h1>Exercise10</h1>
      <p>Content for Exercise10</p>
    </div>
  );
};

export default Exercise10;
