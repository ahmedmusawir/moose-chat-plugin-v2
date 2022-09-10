import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import FormikTextError from './FormikTextError';

function Input({ label, name, ...rest }) {
  return (
    <div className='mb-2'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      <Field name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
