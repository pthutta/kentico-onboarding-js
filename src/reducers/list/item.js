import * as ActionType from '../../actions/types/itemsActionTypes';
import { Item } from '../../models/Item';

export const item = (state = new Item(), action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return new Item({
        id: action.payload.id,
        text: action.payload.text
      });

    case ActionType.SAVE_ITEM_TEXT:
      return state.merge({
        text: action.payload.text,
        isBeingEdited: false
      });

    case ActionType.TOGGLE_ITEM_EDITING:
      return state.set('isBeingEdited', !state.isBeingEdited);

    default:
      return state;
  }
};
