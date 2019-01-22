import React, {PropTypes} from 'react';

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
   updatePlayerScore: React.PropTypes.func.isRequired,
   index: React.PropTypes.number.isRequired,
   score: React.PropTypes.number.isRequired,
 };

 export default Counter;