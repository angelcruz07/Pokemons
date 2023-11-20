import { useRef } from "react";

function App() {
  const ref = useRef();
  const inputRef = useRef();
  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = "Nooo MI compaaa";
  };
  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>
        lala
      </div>
    </div>
  );
}

export default App;
