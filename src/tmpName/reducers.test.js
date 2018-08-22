import { OrderedMap } from 'immutable';
import * as ActionType from './actionTypes';
import {
  addItem,
  saveItemText,
  deleteItem,
  toggleItemEditing
} from './actionCreators';
import { todoApp } from './reducers';
import { ItemRecord } from '../models/itemRecord';

describe('todoApp', () => {
  it('initializes state with OrderedMap', () => {
    const previousState = undefined;
    const expectedState = {
      itemsById: OrderedMap()
    };

    const result = todoApp(previousState, {});

    expect(result).toEqual(expectedState);
  });

  describe('addItem', () => {
    it('returns state with correct text', () => {
      const previousState = {
        itemsById: OrderedMap()
      };
      const text = 'Learn redux';
      const expectedState = {
        itemsById: previousState.itemsById.set('1', new ItemRecord({ text }))
      };

      const result = todoApp(previousState, addItem(text));

      expect(result.itemsById.last().text).toEqual(expectedState.itemsById.last().text);
    });
  });

  describe('saveItemText', () => {
    it('returns state with changed item text', () => {
      const previousState = {
        itemsById: OrderedMap([
          [
            '1',
            new ItemRecord({
              id: '1',
              text: 'Learn react'
            })
          ],
          [
            '2',
            new ItemRecord({
              id: '2',
              text: 'Write app'
            })
          ]
        ])
      };
      const text = 'Learn redux';
      const expectedState = {
        itemsById: OrderedMap([
          [
            '1',
            new ItemRecord({
              id: '1',
              text
            })
          ],
          [
            '2',
            new ItemRecord({
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
        itemsById: OrderedMap([
          [
            '1',
            new ItemRecord({
              id: '1',
              text: 'Learn react'
            })
          ],
          [
            '2',
            new ItemRecord({
              id: '2',
              text: 'Write app'
            })
          ]
        ])
      };
      const expectedState = {
        itemsById: OrderedMap(
          new ItemRecord({
            id: '2',
            text: 'Write app'
          })
        )
      };

      const result = todoApp(previousState, deleteItem('1'));

      expect(result.itemsById.has('1')).toBeFalsy();
      expect(result).toEqual(expectedState);
    });
  });

  describe('toggleItemEditing', () => {
    it('returns state with toggled item\'s editing', () => {
      const previousState = {
        itemsById: OrderedMap([
          [
            '1',
            new ItemRecord({
              id: '1',
              text: 'Learn react'
            })
          ],
          [
            '2',
            new ItemRecord({
              id: '2',
              text: 'Write app'
            })
          ]
        ])
      };
      const expectedState = {
        itemsById: OrderedMap([
          [
            '1',
            new ItemRecord({
              id: '1',
              text: 'Learn react'
            })
          ],
          [
            '2',
            new ItemRecord({
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
