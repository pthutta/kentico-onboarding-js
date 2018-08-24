import * as ActionType from './actionTypes';
import { addItemCreator } from './addItemCreator';
import { generateUuid } from '../utils/generateUuid';

export const addItem = addItemCreator(generateUuid);

export const saveItemText = (id: string, text: string) => ({
  type: ActionType.SAVE_ITEM_TEXT,
  payload: {
    id,
    text
  }
});

export const deleteItem = (id: string) => ({
  type: ActionType.DELETE_ITEM,
  payload: {
    id
  }
});

export const toggleItemEditing = (id: string) => ({
  type: ActionType.TOGGLE_ITEM_EDITING,
  payload: {
    id
  }
});
