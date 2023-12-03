import styled, {keyframes} from 'styled-components'

// Comonente P con styled component
const P = styled.p`
  font-size: 24px;
  color:red;
`
const Contend = styled.div`
  padding: 20px 25px;

`

// Estilos condicionales con css
const Button =  styled.button `
  transiton: box-shadow 0.2s ease;
  background-color:${props => props.primary ? 'red' : 'white'};
  color:${props => props.primary ? 'white' : 'red'};
  padding: 10px 15px;
  border: 2px solid red;
  border-radius: 4px;

  &:hover {
    box-shadow:1px 2px 5px rgb(0,0,0,0.3);
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }
  .info {
    font-size: 24px;
  }

`

const Link = ({className, ...props}) =>{
  return <a href="#" className={className} {...props}></a>

}

const StyledLink =  styled(Link) `
  color: 'blue';
`
//tomar los estilos de boton y agregar o remplazar (heredando estilos de button)
const BlockButton = styled(Button)`
  width:100%;
  font-size: 24px;
`

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'

}))`
  font-size: 20px;
  border:1px solid red;
  color: ${props => props.color};
`

const Password = styled.input.attrs({
  type:'password'
})``

const girar = keyframes`
  from { 
    transform: rotate(0deg);

  }
  to{
    transform: rotate(360deg)
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`


function App() {
  return (
   <Contend>
    <P>Hola soy un parrafo</P>
    <Button primary={true}><P className='info'>Info</P></Button>
    <Button  className='secondary'>Azul</Button>
    <BlockButton primary as="a" href="#">Enviar</BlockButton>
    <Link>Link con estilo</Link>
    <StyledLink>Link con estilo</StyledLink>
    <Input></Input>
    <Password/>
    <br />
    <Rotar> A perro</Rotar>
   </Contend>

  )
}

export default App
