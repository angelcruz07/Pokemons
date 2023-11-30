import Input from  './Input'
import useFormulario  from '../hooks/useFormulario'
import Button from './Button'

function UserForm({ submit }) {
  const  [formulario, handleChange, reset] = useFormulario({
    name: '', 
    email: '', 
    lastname: ''})
    const handleSubmit = (e) =>{
      e.preventDefault(formulario)
      submit(formulario)
      reset()
    }
  return (
    <form onSubmit={handleSubmit}>
    <Input 
    name="name" 
    label="Nombre" 
    value={formulario.name} 
    onChange={handleChange} 
    placeHolder='Nombre'
    />
    <Input 
    name="lastname"
    label="Apellido" 
    value={formulario.lastname} 
    onChange={handleChange} 
    placeHolder='Apellido'
    />
   <Input 
    name="email" 
    label="Correo" 
    value={formulario.email} 
    onChange={handleChange} 
    placeHolder='Correo'
    />
 <Button>
   Enviar
 </Button>
  </form>
  )
}

export default UserForm