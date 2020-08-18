// initial state
const intitialState = {
  fullSentence: ''
}

// action types
const UPDATE_FULLSENTENCE = 'UPDATE_FULLSENTENCE';

// action creators
export function updateFullSentence(wordStr) {
  return {
    type: UPDATE_FULLSENTENCE,
    payload: wordStr
  }
}

// reducer
export default function reducer(state = intitialState, action) {
  switch(action.type) {
    case UPDATE_FULLSENTENCE:
      const newSentence = state.fullSentence + ' ' + action.payload;

      return {
        ...state,
        fullSentence: newSentence
      }
    default: return state;
  }
}
