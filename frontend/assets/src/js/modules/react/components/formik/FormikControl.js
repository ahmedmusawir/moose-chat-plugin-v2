import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import DatePicker from './DatePicker';
import Input from './Input';
import RadioButtons from './RadioButtons';
import Select from './Select';
import Textarea from './Textarea';

function FormikControl({ control, ...rest }) {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'checkbox-group':
      return <CheckboxGroup {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;

    default:
      return null;
  }
}

FormikControl.propTypes = {
  control: PropTypes.string.isRequired,
};

export default FormikControl;
