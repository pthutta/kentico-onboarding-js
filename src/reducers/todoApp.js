import { OrderedMap } from 'immutable';
import { list } from './list/list';

const initialState = {
  list: {
    items: OrderedMap()
  }
};

export const todoApp = (state = initialState, action) => ({
  list: list(state.list, action)
});
