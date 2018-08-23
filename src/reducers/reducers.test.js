import { OrderedMap } from 'immutable';
import {
  addItem,
  saveItemText,
  deleteItem,
  toggleItemEditing
} from '../actions/actionCreators';
import { todoApp } from './todoApp';
import { Item } from '../models/Item';

describe('todoApp', () => {
  it('initializes state with OrderedMap', () => {
    const previousState = undefined;
    const expectedState = {
      items: OrderedMap()
    };

    const result = todoApp(previousState, {});

    expect(result).toEqual(expectedState);
  });

  describe('addItem', () => {
    it('returns state with correct text', () => {
      const previousState = {
        items: OrderedMap()
      };
      const text = 'Learn redux';
      const expectedState = {
        items: previousState.items.set('1', new Item({ text }))
      };

      const result = todoApp(previousState, addItem(text));

      expect(result.items.last().text).toEqual(expectedState.items.last().text);
    });
  });

  describe('saveItemText', () => {
    it('returns state with changed item text', () => {
      const previousState = {
        items: OrderedMap([
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
        ])
      };
      const text = 'Learn redux';
      const expectedState = {
        items: OrderedMap([
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
        ])
      };

      const result = todoApp(previousState, saveItemText('1', text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('deleteItem', () => {
    it('returns state with deleted item', () => {
      const previousState = {
        items: OrderedMap([
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
        ])
      };
      const expectedState = {
        items: OrderedMap([
          [
            '2',
            new Item({
              id: '2',
              text: 'Write app'
            })
          ]
        ])
      };

      const result = todoApp(previousState, deleteItem('1'));

      expect(result.items.has('1')).toBeFalsy();
      expect(result).toEqual(expectedState);
    });
  });

  describe('toggleItemEditing', () => {
    it('returns state with toggled item\'s editing', () => {
      const previousState = {
        items: OrderedMap([
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
        ])
      };
      const expectedState = {
        items: OrderedMap([
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
        ])
      };

      const result = todoApp(previousState, toggleItemEditing('2'));

      expect(result).toEqual(expectedState);
    });
  });
});
