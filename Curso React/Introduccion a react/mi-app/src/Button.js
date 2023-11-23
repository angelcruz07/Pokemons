import Button from "./btn";
import "./btn.css";

const arr = ["Chanchito feliz", "chanchito emocionado", "chanchito triste"];

function Component() {
  const miVariable = false;

  if (miVariable) {
    return <p>Mi variable dio true</p>;
  }
  return (
    <div>
      <h1 onClick={(e) => console.log("click", e)}>Hola mundo</h1>
      {arr.map((el) => (
        <p key={el}>{el}</p>
      ))}
      <Button onClick={() => console.log("Clikeado")}>Enviar</Button>
    </div>
  );
}

export default Component;
