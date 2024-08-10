// Exercise11.js
import React, {useEffect} from "react";

const Exercise11 = () => {
    useEffect(() => {
        alert('O componente foi renderizado pela primeira vez!');
    }, []);
  return (
    <div>
      <h1>Exercise11</h1>
      <p>Content for Exercise11</p>
    </div>
  );
};

export default Exercise11;
