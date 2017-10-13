import { combineReducers } from 'redux';
import uuidv4 from 'uuid';
import randomColor from 'randomcolor';

// Actions
const NEW   = 'memory-game/cards/NEW';


// Reducers
const createNewState = () => {
  const nextState = {};
  const colors = randomColor({ 
    count: 8,
    format: 'rgb',
  });
  const colorPairs = colors.concat(colors).sort(() => 0.5 - Math.random());
  colorPairs.map(color =>
    Object.assign(nextState, {
      [uuidv4()]: {
        color,
        isHidden: true,
      }
    }));
  return nextState;
};

export default combineReducers({
  byId,
});

function byId(state = createNewState(), action) {
  switch(action.type) {
    case NEW:
      return createNewState();
    default:
      return state;
  }
};


// Action Creators
export const newGame = () => ({
  type: NEW,
});


// Selectors
export const getCards = ({byId}) => Object.keys(byId).map(id => Object.assign(byId[id], { id }));
