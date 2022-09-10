import React from 'react';
import PropTypes from 'prop-types';

function Content({ children, width, cssClassNames }) {
  return <div className={`content ${width} ${cssClassNames}`}>{children}</div>;
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  width: PropTypes.string,
  cssClassNames: PropTypes.string,
};

export default Content;
