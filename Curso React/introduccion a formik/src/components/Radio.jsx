import { useField } from 'formik';
import PropTypes from 'prop-types';

const Radio = ({label, ...props}) => {
  const [field] = useField({...props, type: 'radio'})
  return (
    <div>
      <label>
        <input type="radio" {...field} {...props}/>
        {label}
      </label>
    </div>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Radio