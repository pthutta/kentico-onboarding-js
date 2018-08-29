import { item } from './item';
import { Item } from '../../models/Item';
import { addItemCreator } from '../../actions/creators/addItemCreator';
import {
  saveItemText,
  toggleItemEditing
} from '../../actions/itemsActions';

describe('item', () => {
  it('initializes state with default Item Record value', () => {
    const previousState = undefined;
    const expectedState = new Item();

    const result = item(previousState, {});

    expect(result).toEqual(expectedState);
  });

  it('returns previous state when it receives unknown action type', () => {
    const previousState = new Item();
    const result = item(previousState, { type: 'unknown', payload: {} });

    expect(result).toEqual(previousState);
  });

  describe('addItem', () => {
    it('returns item with correct text', () => {
      const previousState = null;
      const text = 'Learn redux';
      const idGenerator = () => '1';
      const expectedState = new Item({
        id: idGenerator(),
        text
      });

      const result = item(previousState, addItemCreator(idGenerator)(text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('saveItemText', () => {
    it('returns item with saved text', () => {
      const previousState = new Item({
        id: '1',
        text: 'Learn react'
      });
      const text = 'Learn redux';
      const expectedState = new Item({
        id: '1',
        text
      });

      const result = item(previousState, saveItemText(previousState.id, text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('toggleItemEditing', () => {
    it('returns item with toggled isBeingEdited', () => {
      const previousState = new Item({
        id: '1',
        text: 'Learn react'
      });
      const expectedState = previousState.set('isBeingEdited', true);

      const result = item(previousState, toggleItemEditing(previousState.id));

      expect(result).toEqual(expectedState);
    });
  });
});
