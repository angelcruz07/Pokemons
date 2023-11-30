import './index.css'
import useFormulario  from './hooks/useFormulario'
import Input from  './components/Input'
import Card from './components/Card'


function App() {
  const  [formulario, handleChange] = useFormulario({name: '', lastname: ''})
  console.log(formulario)
  return (
  <Card>
   <form>
     <Input 
     name="name" 
     label="Nombre" 
     value={formulario.name} 
     onChange={handleChange} />
     <Input 
     name="lastname"
     label="Apellido" 
     value={formulario.lastname} 
     onChange={handleChange} />
   </form>
   </Card>
  )
}

export default App