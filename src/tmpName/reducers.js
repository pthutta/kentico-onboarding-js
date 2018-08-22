import { OrderedMap } from "immutable";
import * as ActionType from './actionTypes';
import { ItemRecord } from '../models/itemRecord';
import { generateUuid } from '../utils/generateUuid';

const initialState = {
  items: OrderedMap()
};

const addItem = (items = OrderedMap(), action) => {
  const item = new ItemRecord({
    id: generateUuid(),
    text: action.text
  });
  return items.set(item.id, item);
};

const saveItemText = (items = OrderedMap(), action) => {
  const changedItem = new ItemRecord({
    id: action.id,
    text: action.text
  });
  return items.set(action.id, changedItem);
};

const deleteItem = (items = OrderedMap(), action) => {
  return items.delete(action.id);
};

const toggleItemEditing = (items = OrderedMap(), action) => {
  return items.update(action.id, item =>
    item.set('isBeingEdited', !item.isBeingEdited)
  );
};

export const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return {
        items: addItem(state.items, action)
      };
    case ActionType.SAVE_ITEM_TEXT:
      return {
        items: saveItemText(state.items, action)
      };
    case ActionType.DELETE_ITEM:
      return {
        items: deleteItem(state.items, action)
      };
    case ActionType.TOGGLE_ITEM_EDITING:
      return {
        items: toggleItemEditing(state.items, action)
      };
    default:
      return state;
  }
};
