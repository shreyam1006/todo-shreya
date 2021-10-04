import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home'
import Users from './components/Users'
import allReducers from './components/redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Nav from './components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const store = createStore(allReducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={App} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

