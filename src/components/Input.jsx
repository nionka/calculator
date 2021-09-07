import React from 'react';
import PropTypes from 'prop-types';

function Input({ input }) {
  return (
    <div className="input">{input}</div>
  );
}

Input.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Input;
