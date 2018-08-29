import { combineReducers } from 'redux';
import { list } from './list/list';

export const todoApp = combineReducers({ list });
