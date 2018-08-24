import { OrderedMap } from 'immutable';
import {
  saveItemText,
  deleteItem,
  toggleItemEditing
} from '../actions/actionCreators';
import { todoApp } from './todoApp';
import { Item } from '../models/Item';
import { addItemCreator } from '../actions/addItemCreator';

describe('todoApp', () => {
  it('initializes state with OrderedMap', () => {
    const previousState = undefined;
    const expectedState = {
      list: {
        items: OrderedMap()
      }
    };

    const result = todoApp(previousState, {});

    expect(result).toEqual(expectedState);
  });

  describe('addItem', () => {
    it('returns state with correct text', () => {
      const previousState = {
        list: {
          items: OrderedMap()
        }
      };
      const text = 'Learn redux';
      const idGenerator = () => '1';
      const expectedState = {
        list: {
          items: OrderedMap([
            [
              idGenerator(),
              new Item({
                id: idGenerator(),
                text
              })
            ]
          ])
        }
      };

      const result = todoApp(previousState, addItemCreator(idGenerator)(text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('saveItemText', () => {
    it('returns state with changed item text', () => {
      const previousState = {
        list: {
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
        }
      };
      const text = 'Learn redux';
      const expectedState = {
        list: {
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
        }
      };

      const result = todoApp(previousState, saveItemText('1', text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('deleteItem', () => {
    it('returns state with deleted item', () => {
      const previousState = {
        list: {
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
        }
      };
      const expectedState = {
        list: {
          items: OrderedMap([
            [
              '2',
              new Item({
                id: '2',
                text: 'Write app'
              })
            ]
          ])
        }
      };

      const result = todoApp(previousState, deleteItem('1'));

      expect(result.list.items.has('1')).toBeFalsy();
      expect(result).toEqual(expectedState);
    });
  });

  describe('toggleItemEditing', () => {
    it('returns state with toggled item\'s editing', () => {
      const previousState = {
        list: {
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
        }
      };
      const expectedState = {
        list: {
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
        }
      };

      const result = todoApp(previousState, toggleItemEditing('2'));

      expect(result).toEqual(expectedState);
    });
  });
});
