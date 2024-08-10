// Exercise16.js
import React, {useMemo, useState} from "react";

const Exercise16 = () => {
    const [contador, setContador] = useState(0);

    const calcularValorCaro = (num) => {
        console.log('Calculando valor caro...');
        return num * 2;
    };

    const valorCaro = useMemo(() => calcularValorCaro(contador), [contador]);
    return (
      <div>
          <h1>Exercise16</h1>
          <div>

              <button onClick={() => setContador(contador + 1)}>
                  Contador: {contador}
              </button>
              <p>Valor caro: {valorCaro}</p>
          </div>
      </div>
  );
};

export default Exercise16;
