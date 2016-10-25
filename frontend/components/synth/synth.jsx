import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(name => ( new Note(TONES[name], name)));
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    let key = e.key;
    this.props.keyPressed(key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    let key = e.key;
    this.props.keyReleased(key);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  playNotes() {
    this.notes.forEach(note => {
      if (this.props.notes.includes(note.key)) {
        note.start();
      } else {
        note.stop();
      }
    });
  }

  pressed() {

  }

  render() {
    this.playNotes();
    return (
      <div>
        Synth
        <ul>
          {
            this.notes.map((note) => (
              <li key={note.key}>
                <NoteKey note={note} />
              </li>)
            )
          }
        </ul>
      </div>
    );
  }
}

export default Synth;
