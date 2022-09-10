import React from 'react';
import PropTypes from 'prop-types';

function FormikTextError({ children }) {
  return <div className='alert alert-danger'>{children}</div>;
}

FormikTextError.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormikTextError;
