import {Formik, Form, ErrorMessage} from 'formik'
import TextInput  from './components/TextInput'
import CheckBox  from './components/CheckBox'
import Select from './components/Select'
import Radio from './components/Radio'

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
      if(!values.radio){
        errors.radio = 'Requerido'
      }
      return errors
}
// Creando un formulario con la libreria formik usando componente
function App() {
  return (
    <Formik
      initialValues={{name: '', lastname: '', email: '', chancho: '', radio: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}>
          <Form>
              <TextInput name="name" label="Nombre"/>
              <br />
              <TextInput name="lastname" label="Apellido"/>
              <br />  
              <TextInput name="email" label="Correo"/>
              <br />
              <Select name="chancho" label="Tipo de chanco">
                <option value="">Seleccione chancho</option>
                <option value="Felipe">Felipe</option>
                <option value="Chachito Feliz">Chanchito Feliz</option>
              </Select>
              <CheckBox name = "accept" >Aceptar terminos y condiciones</CheckBox>
              <Radio name="radio"  value="Chachito1" label="Chacito 1"/>
              <Radio name="radio"  value="Chachito2" label="Chacito 2"/>
              <Radio name="radio"  value="Chachito3" label="Chacito 3"/>
              <ErrorMessage name='radio'/>

              <button type="submit">Enviar</button>
            </Form>
    </Formik>
  );
}
export default App