import { OrderedMap } from 'immutable';
import { item } from './item';
import { Actions } from '../../actions/types/itemsActionTypes';
import { Item } from '../../models/Item';
import { IItemsState } from '../../models/IItemsState';

export const items = (state: IItemsState = OrderedMap(), action: Actions): IItemsState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = item(new Item(), action);
      return state.set(newItem.id, newItem);
    }

    case 'SAVE_ITEM_TEXT':
    case 'TOGGLE_ITEM_EDITING':
      return state.update(action.payload.id, oldItem => item(oldItem, action));

    case 'DELETE_ITEM':
      return state.delete(action.payload.id);

    default:
      return state;
  }
};
