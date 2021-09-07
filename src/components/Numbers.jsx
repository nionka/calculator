import React from 'react';
import PropTypes from 'prop-types';

function Numbers({ handleNumbers }) {

  const handleClick = e => {
    if (e.target.classList.contains('numbers')) return

    handleNumbers(e.target.textContent);
  }

  return ( 
    <div className="leftPanel" onClick={handleClick}>
        <div className="numbers">
          <div>7</div>
          <div>8</div>
          <div>9</div>
        </div>
        <div className="numbers">
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="numbers">
          <div>0</div>
          <div>.</div>
          <div>AC</div>
        </div>
      </div>
   );
}

Numbers.propTypes = {
  handleNumbers: PropTypes.func.isRequired
}
 
export default Numbers;