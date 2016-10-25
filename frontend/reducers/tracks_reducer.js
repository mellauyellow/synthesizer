import {
  ADD_NOTES,
  START_RECORDING,
  STOP_RECORDING
} from '../actions/tracks_actions';
import merge from 'lodash/merge';

let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_RECORDING:
      currTrackId++;
      let track = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      let currrState = merge({}, state);
      currrState[currTrackId] = track;
      return currrState;
    case STOP_RECORDING:
      let currState = merge({}, state);
      let timeSlice = action.timeNow - state[currTrackId].timeStart;
      let currRoll = { notes: [], timeSlice };
      currState[currTrackId].roll.push(currRoll);
      return currState;
    case ADD_NOTES:
      let newState = merge({}, state);
      let newSlice = action.timeNow - state[currTrackId].timeStart;
      let newRoll = { notes: [...action.notes], newSlice };
      newState[currTrackId].roll.push(newRoll);
      return newState;
    default:
      return state;
  }
};

export default tracksReducer;
