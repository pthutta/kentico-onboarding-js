import { OrderedMap } from 'immutable';
import { items } from './items';
import { Item } from '../../models/Item';
import { addItemCreator } from '../../actions/creators/addItemCreator';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing
} from '../../actions/itemsActions';

describe('items', () => {
  it('initializes state with OrderedMap', () => {
    const previousState = undefined;
    const expectedState = OrderedMap();

    const result = items(previousState, {});

    expect(result).toEqual(expectedState);
  });

  it('returns previous state when it receives unknown action type', () => {
    const previousState = OrderedMap([
      [
        '1',
        new Item({
          id: '1',
          text: 'Learn redux'
        })
      ]
    ]);

    const result = items(previousState, { type: 'unknown', payload: {} });

    expect(result).toEqual(previousState);
  });

  describe('addItem', () => {
    it('returns state with correct text', () => {
      const previousState = OrderedMap();
      const text = 'Learn redux';
      const idGenerator = () => '1';
      const expectedState = OrderedMap([
        [
          idGenerator(),
          new Item({
            id: idGenerator(),
            text
          })
        ]
      ]);

      const result = items(previousState, addItemCreator(idGenerator)(text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('saveItemText', () => {
    it('returns state with changed item text', () => {
      const previousState = OrderedMap([
        [
          '1',
          new Item({
            id: '1',
            text: 'Learn react'
          })
        ],
        [
          '2',
          new Item({
            id: '2',
            text: 'Write app'
          })
        ]
      ]);
      const text = 'Learn redux';
      const expectedState = OrderedMap([
        [
          '1',
          new Item({
            id: '1',
            text
          })
        ],
        [
          '2',
          new Item({
            id: '2',
            text: 'Write app'
          })
        ]
      ]);

      const result = items(previousState, saveItemText('1', text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('deleteItem', () => {
    it('returns state with deleted item', () => {
      const previousState = OrderedMap([
        [
          '1',
          new Item({
            id: '1',
            text: 'Learn react'
          })
        ],
        [
          '2',
          new Item({
            id: '2',
            text: 'Write app'
          })
        ]
      ]);
      const expectedState = OrderedMap([
        [
          '2',
          new Item({
            id: '2',
            text: 'Write app'
          })
        ]
      ]);

      const result = items(previousState, deleteItem('1'));

      expect(result.has('1')).toBeFalsy();
      expect(result).toEqual(expectedState);
    });
  });

  describe('toggleItemEditing', () => {
    it('returns state with toggled item\'s editing', () => {
      const previousState = OrderedMap([
        [
          '1',
          new Item({
            id: '1',
            text: 'Learn react'
          })
        ],
        [
          '2',
          new Item({
            id: '2',
            text: 'Write app'
          })
        ]
      ]);
      const expectedState = OrderedMap([
        [
          '1',
          new Item({
            id: '1',
            text: 'Learn react'
          })
        ],
        [
          '2',
          new Item({
            id: '2',
            text: 'Write app',
            isBeingEdited: true
          })
        ]
      ]);

      const result = items(previousState, toggleItemEditing('2'));

      expect(result).toEqual(expectedState);
    });
  });
});
