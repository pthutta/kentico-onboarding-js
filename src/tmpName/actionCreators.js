import * as ActionType from './actionTypes';

export const addItem = text => ({
  type: ActionType.ADD_ITEM,
  text
});

export const saveItemText = (id, text) => ({
  type: ActionType.SAVE_ITEM_TEXT,
  id,
  text
});

export const deleteItem = id => ({
  type: ActionType.DELETE_ITEM,
  id
});

export const toggleItemEditing = id => ({
  type: ActionType.ADD_ITEM,
  id
});
