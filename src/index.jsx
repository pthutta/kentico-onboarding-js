require.context('../public/', true);
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ReactDom from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'
import { todoApp } from './tmpName/reducers';

import { App } from './App.jsx';

const store = createStore(
  todoApp,
  applyMiddleware(logger)
);

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app-root'));
