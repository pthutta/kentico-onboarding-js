import { applyMiddleware, createStore, Store } from 'redux';
import { todoApp } from '../reducers/todoApp';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { initialState } from './initialState';

export const appStore: Store = createStore(
  todoApp,
  initialState,
  composeWithDevTools(applyMiddleware(logger))
);
