import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import FormikTextError from './FormikTextError';

function Checkbox({ label, name, ...rest }) {
  return (
    <div className='form-check pb-1 mb-2'>
      <Field
        type='checkbox'
        name={name}
        id={name}
        {...rest}
        className='form-check-input'
      />
      <label htmlFor={name} className='form-check-label'>
        {label}
      </label>
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox;
