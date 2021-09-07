import React from 'react';
import PropTypes from 'prop-types';
import Equals from './Equals';
import Numbers from './Numbers';
import Operators from './Operators';

function Buttons({ handleEquals, handleOperator, handleNumbers }) {

  return (
    <div className="buttons">
      <Operators handleOperator={handleOperator} />
      <Numbers handleNumbers={handleNumbers} />
      <Equals handleEquals={handleEquals} />
    </div>
  )
}

Buttons.propTypes = {
  handleEquals: PropTypes.func.isRequired,
  handleOperator: PropTypes.func.isRequired,
  handleNumbers: PropTypes.func.isRequired,
}

export default Buttons;
