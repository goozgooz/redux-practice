import * as PlayerActions from '../action-types/player';

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
  }
];

export default function Player(state = initialState, action) {
  switch(action.type) {
    case PlayerActions.ADD_PLAYER:
      return [
        ...state, 
        {
          name: action.name,
          score: 0
        }
      ];
    
      case PlayerActions.REMOVE_PLAYER:
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];

      case PlayerActions.UPDATE_PLAYER_SCORE:
        return state.map((player, index) => {
          if (index === action.index) {
            return {
              ...player, 
              score: player.score + action.score
            }
          } else {
            return player;
          }
        })
      
        default: 
          return state;
  }
}