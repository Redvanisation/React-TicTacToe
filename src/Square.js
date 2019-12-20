/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Square = ({ value, onClick }) => (
  <button type="button" className="square" onClick={onClick}>
    {value}
  </button>
);

export default Square;
