import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PlayerActions from '../actions/player';

import AddPlayerForm from '../components/AddPlayerForm';
import Header from '../components/Header';
import Player from '../components/Player';

class Scoreboard extends React.Component {
  
  static propTypes = {
    players: PropTypes.array.isRequired,
  }

  render() {
    const {dispatch, players} = this.props;
    
    const addPlayer = bindActionCreators(PlayerActions.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActions.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActions.updatePlayerScore, dispatch);
    
    const PlayerComponents = players.map((player, i) => (
      <Player
        index={i}
        name={player.name}
        score={player.score}
        key={i}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ));
    
    
    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {PlayerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  players: state,
});

export default connect(mapStateToProps)(Scoreboard);