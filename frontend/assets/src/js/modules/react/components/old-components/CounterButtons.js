import React from 'react';
import PropTypes from 'prop-types';
import { Col, Button } from 'react-bootstrap';
import Content from '../layouts/Content';

function CounterButtons({ counter, onIncrement, onDecrement, onDelete }) {
  return (
    <Col sm={12} md={6}>
      <Content width='w-100'>
        <Button variant='success' onClick={() => onIncrement(counter.id)}>
          +
        </Button>{' '}
        <Button
          disabled={counter.value <= 0 ? 'disabled' : ''}
          onClick={() => onDecrement(counter.id)}
          variant='warning'
        >
          -
        </Button>{' '}
        <Button variant='danger' onClick={() => onDelete(counter.id)}>
          X
        </Button>
      </Content>
    </Col>
  );
}

CounterButtons.propTypes = {
  counter: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CounterButtons;
