import React from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const {index, updatePlayerScore} = props;
  return (
    <div className="counter" >
      <button className="counter-action decrement" onClick={() => updatePlayerScore(index, -1)}>
        -
      </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={() => updatePlayerScore(index,1)}>
        +
      </button>
    </div>
  );
 }
 
 Counter.propTypes = {
   onChange: PropTypes.func.isRequired,
   score: PropTypes.number.isRequired,
 };

 export default Counter;