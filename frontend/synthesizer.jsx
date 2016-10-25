import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Note from './util/note';
import Root from './components/root';
import * as actions from './actions/notes_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.actions = actions;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
