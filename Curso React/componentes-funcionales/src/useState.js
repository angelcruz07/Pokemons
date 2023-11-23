import { useState } from "react";

//Custom hook
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);
  const incrementar = () => {
    setContador(contador + 1);
  };

  return [contador, incrementar];
};

// Uso de custom hook
function App() {
  const [contador, incrementar] = useContador(0);
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
