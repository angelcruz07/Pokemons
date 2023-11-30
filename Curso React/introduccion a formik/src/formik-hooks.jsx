// Importando el hook de useFormik
import {useFormik} from 'formik'
import './App.css'

// Mejor practica crear una funcion 
const validate = (values) => {
  const errors =  {}
      if (!values.name ){
      errors.name = 'Requerido'
      }else if (values.name.length < 5){
       errors.name = 'Minimo 5 carateres'
      }
      // vaLidacion solo cuando se esta tacando el campo del formulario on to
      if (!values.lastname ){
        errors.lastname = 'Requerido'
        }else if (values.lastname.length < 5){
         errors.lastname = 'El apellido es muy corto'
        }
      return errors
}

// Creando un formulario con la libreria formik
function App() {
  //propiedades del objeto formik
  const formik = useFormik({
    initialValues:{
      name: '',
      lastname: '', 
      email: '',
    },
    // Funcion de validacion de campos
    validate,
    // Reciir los valores de los campos
    onSubmit: values => console.log(values)
})
  return (
    //handle submit encargado de tomar todoa loa datos
    <form onSubmit={formik.handleSubmit}>
      <label >Name</label>
      {/* Evitando codigo repetitivo pasando las props de la siguiente manera */}
      <input type="text" {...formik.getFieldProps('name')}/>
       <br />
      {/*Verifival si ha sido tocado  */}
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name }</div> : null}
      <label >Apellido</label>
      <input type="text" {...formik.getFieldProps('lastname')}/>
      <br />
      {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname }</div> : null}
      <label >Email</label>
      <input 
      // Ejemplo de codigo repetitivo 
      type="email"
      name="email"
      // Handle chande de la misma manera que usamos en el video anterios
      onChange={formik.handleChange}
      //Values neceesarios para enviar los valores inicializados en formik
      value ={formik.values.email}
       />
        <br />
       {/* // Envial los datos con el tipo submit  */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App