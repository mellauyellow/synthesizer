import React from 'react';

const Recorder = ({tracks, isRecording, addNotes, stopRecording, startRecording}) => (
  <div>
    <button
      className ='start-button'
      onClick={startRecording}
      disabled={isRecording}>
      Start
    </button>
    <button
      className='stop-button'
      onClick={stopRecording}
      disabled={!isRecording}>
      Stop
    </button>
  </div>
);

export default Recorder;
