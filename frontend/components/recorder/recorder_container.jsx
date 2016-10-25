import { connect } from 'react-redux';
import Recorder from './recorder';
import { addNotes, stopRecording, startRecording }
  from '../../actions/tracks_actions';

const mapStateToProps = function (state) {
  return {
    tracks: state.tracks,
    isRecording: state.isRecording
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    addNotes: notes => dispatch(addNotes(notes)),
    stopRecording: () => dispatch(stopRecording()),
    startRecording: () => dispatch(startRecording())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recorder);
