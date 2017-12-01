import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, pure, setPropTypes } from 'recompose';

const AddCount = ({ setFilter }) => (
  <div>
    <style jsx>{`
      div {
        padding: 0 0 20px 0;
      }
    `}</style>
    <select onChange={event => setFilter(event.target.value)}>
      <option value="">Select Sorting</option>
      <option value="size">Size</option>
      <option value="price">Price</option>
      <option value="id">Id</option>
    </select>
  </div>
);

export default compose(
  setDisplayName('AddCount'),
  setPropTypes({
    count: PropTypes.number,
    setFilter: PropTypes.func,
  }),
  pure,
)(AddCount);
