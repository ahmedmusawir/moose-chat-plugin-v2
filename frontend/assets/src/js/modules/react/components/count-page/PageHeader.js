import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import Content from '../layouts/Content';

function PageHeader({ counters, stylesBadge, onReset }) {
  return (
    <Row className='justify-content-center'>
      <Col sm={12}>
        <Content width='w-100'>
          <h3>It's All About The Count...</h3>
          <Button onClick={onReset} variant='danger' size='sm'>
            Reset
          </Button>
          <h4 className='float-right'>
            Positivity:{' '}
            <span className='badge badge-success' style={stylesBadge}>
              {counters.filter((c) => c.value > 0).length}
            </span>
          </h4>
        </Content>
      </Col>
    </Row>
  );
}

PageHeader.propTypes = {
  counters: PropTypes.array.isRequired,
  stylesBadge: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default PageHeader;
