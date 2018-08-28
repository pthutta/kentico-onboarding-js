import { item } from './item';
import { IItemsState } from '../models/IItemsState';
import { Actions } from '../actions/actionTypes';
import { Item } from '../models/Item';

export const items = (state: IItemsState, action: Actions) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = item(new Item(), action);
      return state.set(newItem.id, newItem);
    }

    case 'SAVE_ITEM_TEXT':
    case 'TOGGLE_ITEM_EDITING':
      return state.update(action.payload.id, oldItem => item(oldItem as Item, action));

    case 'DELETE_ITEM':
      return state.delete(action.payload.id);

    default:
      return state;
  }
};
