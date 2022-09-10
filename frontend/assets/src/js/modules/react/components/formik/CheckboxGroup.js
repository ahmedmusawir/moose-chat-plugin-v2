import React from 'react';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import FormikTextError from './FormikTextError';

function CheckboxGroup({ label, name, options, ...rest }) {
  return (
    <div role='group'>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div key={option.key} className='form-check'>
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  className='form-check-input'
                />

                <label className='form-check-label' htmlFor={option.value}>
                  {option.key}
                </label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
}

CheckboxGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default CheckboxGroup;
