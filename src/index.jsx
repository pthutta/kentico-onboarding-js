require.context('../public/', true);
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactDom from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { OrderedMap } from 'immutable';
import { todoApp } from './reducers/todoApp';
import { App } from './App';

const initialState = {
  list: {
    items: OrderedMap()
  }
};

const store = createStore(
  todoApp,
  initialState,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root'));
