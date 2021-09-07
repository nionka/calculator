import React from 'react';
import PropTypes from 'prop-types';

function Operators({ handleOperator }) {

  const handleClick = e => {
    if (e.target.classList.contains('operators')) return

    handleOperator(e.target.textContent)
  }

  return ( 
    <div
      className="operators"
      onClick={handleClick}
    >
        <div>+</div>
        <div>-</div>
        <div>*</div>
        <div>/</div>
    </div>
   );
}

Operators.propTypes = {
  handleOperator: PropTypes.func.isRequired
}
 
export default Operators;