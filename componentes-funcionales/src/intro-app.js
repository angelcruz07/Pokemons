// Funcion impura
const impura = () => new Date().toLocaleDateString();

console.log(impura());

//Componente con const
const MiComponente = ({ miProp }) => {
  return <div>Nombre : {miProp}</div>;
};

//Componente con function
function App({ miProp }) {
  return <MiComponente miProp={"hola mundo"} />;
}

export default App;
