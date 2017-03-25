import React from 'react';
import ReactDom from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import App from './components/App';
import Auth from './components/Auth';
import Player from './components/Player';
import AuthorizedComponent from './components/AuthorizedComponent';

import './styles/index.scss';

const logger = createLogger({
  collapsed: true
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);

ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AuthorizedComponent(Player)}/>
        <Route path="/login" component={Auth}/>
      </Route>
    </Router>
  </Provider>,
  document.querySelector('#root')
);
