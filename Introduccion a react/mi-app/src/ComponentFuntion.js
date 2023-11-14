const X = () => <h1>Hola mundo</h1>;
// Creando un componente

const Li = ({ children, estado, casa, edad }) => {
  console.log(casa, edad);
  return (
    <li>
      {children} {estado}
    </li>
  );
};

const X = () => (
  <ul>
    <Li estado={"feliz"} casa={"false"} edad={24}>
      {" "}
      Chanchito
    </Li>
    <Li estado={" esta aprendiendo react"}>Angel</Li>
  </ul>
);

// Anatomia de una componente de react
