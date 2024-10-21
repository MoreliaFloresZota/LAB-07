import { useState } from "react";

const RandomComponent = () => {
  const [randomValue, setRandomValue] = useState(Math.floor(Math.random() * 100) + 1);

  function resetValue() {
    setRandomValue(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div>
      <h2>Valor aleatorio: {randomValue}</h2>
      <button onClick={resetValue}>Generar nuevo valor</button>
    </div>
  );
};

export default RandomComponent;
