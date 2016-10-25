import { KEY_PRESSED, KEY_RELEASED } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones';

const notesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case KEY_PRESSED:
      if (state.includes(action.key) ||
          !NOTE_NAMES.includes(action.key)){
        return state;
      }
      else {
        return [...state, action.key];
      }
    case KEY_RELEASED:
      if (state.includes(action.key) && NOTE_NAMES.includes(action.key)){
        let idx = state.indexOf(action.key);
        return state.slice(0, idx).concat(state.slice(idx+1));
      }
      else {
        return state;
      }
    default:
      return state;
  }
};

export default notesReducer;
