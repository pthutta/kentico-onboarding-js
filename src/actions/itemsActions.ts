import { addItemCreator } from './creators/addItemCreator';
import { generateUuid } from '../utils/generateUuid';
import {
  AddItemAction,
  DeleteItemAction,
  SaveItemTextAction,
  ToggleItemEditingAction,
} from './types/itemsActionTypes';

export const addItem: (text: string) => AddItemAction = addItemCreator(generateUuid);

export const saveItemText = (id: Guid, text: string): SaveItemTextAction => ({
  type: 'SAVE_ITEM_TEXT',
  payload: {
    id,
    text,
  },
});

export const deleteItem = (id: Guid): DeleteItemAction => ({
  type: 'DELETE_ITEM',
  payload: {
    id,
  },
});

export const toggleItemEditing = (id: Guid): ToggleItemEditingAction => ({
  type: 'TOGGLE_ITEM_EDITING',
  payload: {
    id,
  },
});
