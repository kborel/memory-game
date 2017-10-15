import randomColor from 'randomcolor';

// Actions
const NEW = 'memory-game/cards/NEW';
const SELECT = 'memory-game/cards/SELECT';


// Reducers
export default function cards(state = {}, action) {
  const nextState = {};
  switch(action.type) {
    case NEW:
      const colors = randomColor({ 
        count: 8,
      });
      colors.concat(colors).sort(() => 0.5 - Math.random()).forEach((color, index) => {
        Object.assign(nextState, {
          [index]: {
            color,
            status: 'hidden',
          }
        });
      });
      return nextState;
    case SELECT:
      const matchingIds = Object.keys(state).filter( id => state[id].status === 'matching');
      Object.assign(nextState, {
        ...state,
        [action.id]: {
          ...state[action.id],
          status: 'matching',
        },
      });

      if (matchingIds.length !== 2)
        return nextState;

      if (state[matchingIds[0]].color === state[matchingIds[1]].color) {
        Object.assign(nextState, {
          [matchingIds[0]]: {
            ...state[matchingIds[0]],
            status: 'matched',
          },
          [matchingIds[1]]: {
            ...state[matchingIds[1]],
            status: 'matched',
          },
        });
      } else {
        Object.assign(nextState, {
          [matchingIds[0]]: {
            ...state[matchingIds[0]],
            status: 'hidden',
          },
          [matchingIds[1]]: {
            ...state[matchingIds[1]],
            status: 'hidden',
          },
        })
      }
      return nextState;
    default:
      return state;
  }
}


// Action Creators
export const newGame = () => ({
  type: NEW,
});

export const selectCard = id => ({
  type: SELECT,
  id,
});


// Selectors
export const getCards = state => Object.keys(state.cards).map(id => ({
  ...state.cards[id],
  id,
}));
