import { Item } from '../models/Item';
import { Actions } from '../actions/actionTypes';
import { IItem } from '../models/IItem';

export const item = (state: Item, action: Actions): IItem => {
  switch (action.type) {
    case 'ADD_ITEM':
      return new Item({
        id: action.payload.id,
        text: action.payload.text
      });

    case 'SAVE_ITEM_TEXT':
      return state.with({
        text: action.payload.text,
        isBeingEdited: false
      });

    case 'TOGGLE_ITEM_EDITING':
      return state.with({ isBeingEdited: !state.isBeingEdited });

    default:
      return state;
  }
};
