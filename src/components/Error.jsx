import React from 'react';
import PropTypes from 'prop-types';

function Error({ text }) {
  return (
    <div className="error">{text}</div>
  );
}

Error.propTypes = {
  text: PropTypes.string.isRequired
}

export default Error;