import * as PlayerAction from '../action-types/player';

export const addPlayer = (name) => {
  return {
    type: PlayerAction.ADD_PLAYER,
    name
  };
};

export const removePlayer = (index) => {
  return {
    type: PlayerAction.REMOVE_PLAYER,
    index
  };
};

export const updatePlayerScore = (index, score) => {
  return {
    type: PlayerAction.UPDATE_PLAYER_SCORE,
    index,
    score,
  };
};