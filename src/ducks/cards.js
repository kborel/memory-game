import { combineReducers } from 'redux';

// Actions
const NEW   = 'memory-game/cards/NEW';


// Reducers
export default combineReducers({
  byId,
  allIds,
});

function byId(state = {}, action) {
  switch(action.type) {
    default:
      return state;
  }
};

function allIds(state = [], action) {
  switch(action.type) {
    default:
      return state;
  }
};


// Action Creators
export const newGame = () => ({
  type: NEW,
});


// Selectors