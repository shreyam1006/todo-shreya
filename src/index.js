import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import allReducers from './components/redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(allReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

