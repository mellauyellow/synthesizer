import React from 'react';
import SynthContainer from './synth/synth_container';
import RecorderContainer from './recorder/recorder_container';
import JukeboxContainer from './jukebox/jukebox_container';

const App = () => (
  <div className="app">
    <SynthContainer />
    <br/>
    <RecorderContainer/>
    <br/>
    <JukeboxContainer/>
  </div>
);

export default App;
