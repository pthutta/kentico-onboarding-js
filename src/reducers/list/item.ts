import { Item } from '../../models/Item';
import { Actions } from '../../actions/types/itemsActionTypes';
import { IItem } from '../../models/IItem';

export const item = (state: IItem = new Item(), action: Actions): IItem => {
  switch (action.type) {
    case 'ADD_ITEM':
      return new Item({
        id: action.payload.id,
        text: action.payload.text
      });

    case 'SAVE_ITEM_TEXT':
      return (state as Item).with({
        text: action.payload.text,
        isBeingEdited: false
      });

    case 'TOGGLE_ITEM_EDITING':
      return (state as Item).with({
        isBeingEdited: !state.isBeingEdited
      });

    default:
      return state;
  }
};
