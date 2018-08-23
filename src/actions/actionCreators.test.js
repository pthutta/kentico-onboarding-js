import * as ActionType from './actionTypes';
import {
  addItem,
  deleteItem,
  saveItemText,
  toggleItemEditing
} from './actionCreators';
import { generateUuid } from '../utils/generateUuid';

describe('addItem', () => {
  it('returns action with correct text', () => {
    const text = 'Learn react';
    const expectedResult = {
      type: ActionType.ADD_ITEM,
      text
    };

    const result = addItem(text);

    expect(result).toEqual(expectedResult);
  });
});

describe('saveItemText', () => {
  it('returns action with correct text and id', () => {
    const text = 'Learn redux';
    const id = generateUuid();
    const expectedResult = {
      type: ActionType.SAVE_ITEM_TEXT,
      id,
      text
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
      id
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
      id
    };

    const result = toggleItemEditing(id);

    expect(result).toEqual(expectedResult);
  });
});
