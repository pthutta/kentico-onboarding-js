import { items } from './items';
import { IListState } from '../models/IListState';
import { Actions } from '../actions/actionTypes';

export const list = (state: IListState, action: Actions) => ({
  items: items(state.items, action)
});
