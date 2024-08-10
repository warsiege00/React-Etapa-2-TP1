// Exercise03.js
import React, {useState} from "react";

const Exercise03 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Exercise03</h1>
      <p>Content for Exercise03</p>
        <button onClick={() => setCount(count + 1)}>Contar: {count}</button>
    </div>
  );
};

export default Exercise03;
