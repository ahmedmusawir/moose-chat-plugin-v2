import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import FormikTextError from './FormikTextError';

function Select({ label, name, options, ...rest }) {
  return (
    <div className='mb-3'>
      <label htmlFor={name} className='form-label mt-2'>
        {label}
      </label>
      <Field as='select' name={name} id={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Select;
