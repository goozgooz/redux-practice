import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const Player = (props) => {
  const {removePlayer, updatePlayerScore, score, name, index} = props;
  
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={() => removePlayer(index)}>✖</a>
        {name}
      </div>
      <div className="player-score">
        <Counter 
          updatePlayerScore={updatePlayerScore} 
          index={index}
          score={score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired,
};

export default Player;