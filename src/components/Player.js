import React, {PropTypes} from 'react';
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
  index: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  removePlayer: React.PropTypes.func.isRequired,
  updatePlayerScore: React.PropTypes.func.isRequired,
};

export default Player;