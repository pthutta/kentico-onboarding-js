import { OrderedMap } from 'immutable';
import { list } from './list';
import { IAppState } from '../models/IAppState';
import { Actions } from '../actions/actionTypes';

const initialState: IAppState = {
  list: {
    items: OrderedMap()
  }
};

export const todoApp = (state = initialState, action: Actions) => ({
  list: list(state.list, action)
});
