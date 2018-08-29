require.context('../public/', true);
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import * as ReactDom from 'react-dom';
import * as React from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { OrderedMap } from 'immutable';
import { todoApp } from './reducers/todoApp';
import { App } from './App';
import { IAppState } from './models/IAppState';

const initialState: IAppState = {
  list: {
    items: OrderedMap()
  }
};

const store: Store = createStore(
  todoApp,
  initialState,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root'));
