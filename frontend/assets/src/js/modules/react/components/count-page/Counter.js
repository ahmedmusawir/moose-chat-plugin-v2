import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Content from '../layouts/Content';

function Counter({ styleCount, formatCount, stylesBadge, counter }) {
  return (
    <Col sm={12} md={6}>
      <Content width='w-100' cssClassNames=''>
        <div style={stylesBadge} className={styleCount(counter)}>
          {formatCount(counter)}
        </div>
        Counter ID: {counter.id}
      </Content>
    </Col>
  );
}

Counter.propTypes = {
  counter: PropTypes.object.isRequired,
  stylesBadge: PropTypes.object.isRequired,
  styleCount: PropTypes.func.isRequired,
  formatCount: PropTypes.func.isRequired,
};

export default Counter;
