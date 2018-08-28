import * as ActionType from './types/itemsActionTypes';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing
} from './itemsActions';
import { generateUuid } from '../utils/generateUuid';
import { addItemCreator } from './creators/addItemCreator';

describe('addItem', () => {
  it('returns action with correct text', () => {
    const text = 'Learn react';
    const idGenerator = () => '1';
    const expectedResult = {
      type: ActionType.ADD_ITEM,
      payload: {
        text,
        id: idGenerator()
      }
    };

    const result = addItemCreator(idGenerator)(text);

    expect(result).toEqual(expectedResult);
  });
});

describe('saveItemText', () => {
  it('returns action with correct text and id', () => {
    const text = 'Learn redux';
    const id = generateUuid();
    const expectedResult = {
      type: ActionType.SAVE_ITEM_TEXT,
      payload: {
        id,
        text
      }
    };

    const result = saveItemText(id, text);

    expect(result).toEqual(expectedResult);
  });
});

describe('deleteItem', () => {
  it('returns action with correct id', () => {
    const id = generateUuid();
    const expectedResult = {
      type: ActionType.DELETE_ITEM,
      payload: {
        id
      }
    };

    const result = deleteItem(id);

    expect(result).toEqual(expectedResult);
  });
});

describe('toggleItemEditing', () => {
  it('returns action with correct id', () => {
    const id = generateUuid();
    const expectedResult = {
      type: ActionType.TOGGLE_ITEM_EDITING,
      payload: {
        id
      }
    };

    const result = toggleItemEditing(id);

    expect(result).toEqual(expectedResult);
  });
});
