import {useField} from 'formik'
import PropTypes from 'prop-types';

//Componente customizado 
const TextInput = ({ label, ...props}) =>{
   const [ field, meta] = useField(props)
   console.log(field, meta)
  return (
    <div> 
      <label className="label">{label}</label>
      <input {...field}/>
      {meta.touched && meta.error ? <div className ="error-mesagge">{meta.error}</div> : null}
    </div>
  )
}
TextInput.propTypes = {
  label: PropTypes.string.isRequired,
};


export default TextInput