import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import Content from '../layouts/Content';
import Counter from './Counter';
import CounterButtons from './CounterButtons';

function Counters({
  counters,
  stylesBadge,
  styleCount,
  formatCount,
  onIncrement,
  onDecrement,
  onDelete,
}) {
  return (
    <div>
      {counters.map((counter) => (
        <Row key={counter.id} className='justify-content-center'>
          <Counter
            styleCount={styleCount}
            formatCount={formatCount}
            stylesBadge={stylesBadge}
            counter={counter}
          />
          <CounterButtons
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        </Row>
      ))}
    </div>
  );
}

Counters.propTypes = {
  counters: PropTypes.array.isRequired,
  stylesBadge: PropTypes.object.isRequired,
  styleCount: PropTypes.func.isRequired,
  formatCount: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Counters;
