import { useField } from 'formik';
import PropTypes from 'prop-types';

function Select({ label , ...props}) {
  const [field, meta] = useField(props)
  console.log(field)
  return (
    <div>
      <label>{label}</label>
      <select {...field}{...props}/>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
};


export default Select