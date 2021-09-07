import React from 'react';
import PropTypes from 'prop-types';

function Equals({ handleEquals }) {
  return ( 
    <div 
      className="equal"
      onClick={handleEquals}
    >
      =
    </div>
   );
}

Equals.propTypes = {
  handleEquals: PropTypes.func.isRequired
}
 
export default Equals;