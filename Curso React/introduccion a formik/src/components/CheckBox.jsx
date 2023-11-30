import { useField } from 'formik';
import PropTypes from 'prop-types';

function CheckBox({ children, ...props }) {
  const [field, meta] = useField({...props, type: 'checkbox'});
  return (
    <div>
      <label>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </div>
  );
}

CheckBox.propTypes = {
  children: PropTypes.string.isRequired,
};

export default CheckBox;