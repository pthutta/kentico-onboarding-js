import * as ActionType from '../../actions/types/itemsActionTypes';
import { item } from './item';

export const items = (state, action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      const newItem = item(null, action);
      return state.set(newItem.id, newItem);
    }

    case ActionType.SAVE_ITEM_TEXT:
    case ActionType.TOGGLE_ITEM_EDITING:
      return state.update(action.payload.id, oldItem => item(oldItem, action));

    case ActionType.DELETE_ITEM:
      return state.delete(action.payload.id);

    default:
      return state;
  }
};
