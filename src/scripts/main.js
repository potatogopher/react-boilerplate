import React from 'react';
import { render } from 'react-dom';
import cubbie from 'cubbie'
import App from './components/App';

window.store = cubbie.createStore();

store.on(store.stateEvents, () => {
  render(<App />, document.getElementById('root'));
  console.log("app rendered")
});

store.setInitialState({
  user: {
    name: 'nick',
    age: 21,
  }
});

window.birthday = function() {
  store.modifyState(s => s.user.age++)
}

store.on('CLICK_USER_DATA', evt => {
  const data = evt.target.dataset.info
  console.log(data)
  console.log(store.state.user[data])
});
