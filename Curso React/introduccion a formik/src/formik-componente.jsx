import {Formik} from 'formik'
import './App.css'

const validate = (values) => {
  const errors =  {}
      if (!values.name ){
      errors.name = 'Requerido'
      }else if (values.name.length < 5){
       errors.name = 'Minimo 5 carateres'
      }
      if (!values.lastname ){
        errors.lastname = 'Requerido'
        }else if (values.lastname.length < 5){
         errors.lastname = 'El apellido es muy corto'
        }
      return errors
}
// Creando un formulario con la libreria formik usando componente
function App() {

  return (
    <Formik
    initialValues={{
    name: '',
    lastname: '', 
    email: '',}}
    validate={validate}
    onSubmit={values => console.log(values)}>
    {formik =>
      <form onSubmit={formik.handleSubmit}>
        <label >Name</label>
          <input type="text" {...formik.getFieldProps('name')}/>
            <br />
              {formik.touched.name && formik.errors.name ? <div>{formik.errors.name }</div> : null}
        <label >Apellido</label>
          <input type="text" {...formik.getFieldProps('lastname')}/>
            <br />  
              {formik.touched.lastname && formik.errors.lastname ? <div>{formik.errors.lastname }</div> : null}
        <label >Email</label>
          <input type="email" {...formik.getFieldProps('email')}/>
            <br />
        <button type="submit">Enviar</button>
        </form>
    }
    </Formik>
  );
}
export default App