import { OrderedMap } from 'immutable';
import { item } from './item';
import { Actions } from '../../actions/types/itemsActionTypes';
import { Item } from '../../models/Item';
import { IItemsState } from '../../store/state/IItemsState';

export const items = (state: IItemsState = OrderedMap(), action: Actions): IItemsState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = item(new Item(), action);
      return state.set(newItem.id, newItem);
    }

    case 'SAVE_ITEM_TEXT':
    case 'TOGGLE_ITEM_EDITING':
    case 'SET_ITEM_SYNCING':
    case 'PUT_ITEM_SUCCESS':
    case 'CANCEL_ITEM_UPDATING':
      return state.update(action.payload.id, oldItem => item(oldItem, action));

    case 'DELETE_ITEM_SUCCESS':
      return state.delete(action.payload.id);

    case 'LOADING_ITEMS_SUCCESS': {
      const response = action.payload.response.map(newItem => [newItem.id, newItem]);
      return OrderedMap(response);
    }

    case 'POST_ITEM_SUCCESS': {
      const newItem = item(state.get(action.payload.oldId), action);
      return state.delete(action.payload.oldId)
                  .set(newItem.id, newItem);
    }

    case 'ADD_ITEM_ERROR':
      return state.update(action.payload.itemId, oldItem => item(oldItem, action));

    case 'DELETE_ITEM_ERROR': {
      const itemId: Guid = state.find((oldItem: Item) => oldItem.errorId === action.payload.errorId).id;
      return state.update(itemId, oldItem => item(oldItem, action));
    }

    default:
      return state;
  }
};
