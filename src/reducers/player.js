 import * as PlayerActionTypes from '../actiontypes/player';
 
 const initialState = [
  {
    name: 'Jim Hoskins',
    score: 31,
  },
  {
    name: 'Andrew Chalkley',
    score: 20,
  },
  {
    name: 'Alena Holligan',
    score: 50,
  },
];

export default function Player(state=initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return [
        ...state, {
          score: 0,
          name: action.name
        }
      ];
      
    case PlayerActionTypes.REMOVE_PLAYER:
      return state.filter((player,i) => i !== action.index);
      
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map((player,i) => i === action.index ? {...player, score: player.score + action.score} : player);
      
    default: 
      return state;
  }
}