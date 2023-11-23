import { Component } from "react";

class Button extends Component {
  render() {
    console.log("Ejecutando el render de boton ");
    return <button>enviar</button>;
  }
}



class App extends Component {
  // El estado de un componente siempre debe ser el siguiente
  state = {
    valor: 3,
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola mundo con componente en clase</p>
        <Button />
        <button onClick={() => this.setState({ valor: 2 })}>Enviar</button>
      </div>
    );
  }
}
export default App;

