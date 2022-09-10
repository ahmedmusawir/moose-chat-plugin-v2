import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import FormikTextError from './FormikTextError';

function Textarea({ label, name, rows, ...rest }) {
  return (
    <div className='mb-3'>
      <label htmlFor={name} className='form-label mt-2'>
        {label}
      </label>
      <Field as='textarea' name={name} id={name} rows={rows} {...rest}></Field>
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
};

export default Textarea;
