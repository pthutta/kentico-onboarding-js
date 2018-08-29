import {
  deleteItem,
  saveItemText,
  toggleItemEditing
} from './itemsActions';
import { generateUuid } from '../utils/generateUuid';
import { addItemCreator } from './creators/addItemCreator';
import {
  AddItemAction,
  DeleteItemAction,
  SaveItemTextAction,
  ToggleItemEditingAction
} from './types/itemsActionTypes';

describe('addItem', () => {
  it('returns action with correct text', () => {
    const text: string = 'Learn react';
    const idGenerator = () => '1';
    const expectedResult: AddItemAction = {
      type: 'ADD_ITEM',
      payload: {
        text,
        id: idGenerator()
      }
    };

    const result: AddItemAction = addItemCreator(idGenerator)(text);

    expect(result).toEqual(expectedResult);
  });
});

describe('saveItemText', () => {
  it('returns action with correct text and id', () => {
    const text: string = 'Learn redux';
    const id: string = generateUuid();
    const expectedResult: SaveItemTextAction = {
      type: 'SAVE_ITEM_TEXT',
      payload: {
        id,
        text
      }
    };

    const result: SaveItemTextAction = saveItemText(id, text);

    expect(result).toEqual(expectedResult);
  });
});

describe('deleteItem', () => {
  it('returns action with correct id', () => {
    const id: string = generateUuid();
    const expectedResult: DeleteItemAction = {
      type: 'DELETE_ITEM',
      payload: {
        id
      }
    };

    const result: DeleteItemAction = deleteItem(id);

    expect(result).toEqual(expectedResult);
  });
});

describe('toggleItemEditing', () => {
  it('returns action with correct id', () => {
    const id: string = generateUuid();
    const expectedResult: ToggleItemEditingAction = {
      type: 'TOGGLE_ITEM_EDITING',
      payload: {
        id
      }
    };

    const result: ToggleItemEditingAction = toggleItemEditing(id);

    expect(result).toEqual(expectedResult);
  });
});
