import React from 'react';
import PropTypes from 'prop-types';
import DateView from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage } from 'formik';
import FormikTextError from './FormikTextError';

function DatePicker({ label, name, options, ...rest }) {
  return (
    <div role="group">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              className="form-control"
              placeholderText={label}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
}

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DatePicker;
