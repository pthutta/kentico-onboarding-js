import { OrderedMap } from 'immutable';
import { addItemCreator } from '../../actions/creators/addItemCreator';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing
} from '../../actions/itemsActions';
import { list } from './list';
import { Item } from '../../models/Item';


describe('list', () => {
  it('initializes state with OrderedMap', () => {
    const previousState = undefined;
    const expectedState = {
      items: OrderedMap()
    };

    const result = list(previousState, {});

    expect(result).toEqual(expectedState);
  });

  it('returns previous state when it receives unknown action type', () => {
    const previousState = {
      items: OrderedMap([
        [
          '1',
          new Item({
            id: '1',
            text: 'Learn redux'
          })
        ]
      ])
    };

    const result = list(previousState, { type: 'unknown', payload: {} });

    expect(result).toEqual(previousState);
  });

  describe('addItem', () => {
    it('returns state with correct text', () => {
      const previousState = {
        items: OrderedMap()
      };
      const text = 'Learn redux';
      const idGenerator = () => '1';
      const expectedState = {
        items: OrderedMap([
          [
            idGenerator(),
            new Item({
              id: idGenerator(),
              text
            })
          ]
        ])
      };

      const result = list(previousState, addItemCreator(idGenerator)(text));

      expect(result).toEqual(expectedState);
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

      const result = list(previousState, saveItemText('1', text));

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

      const result = list(previousState, deleteItem('1'));

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

      const result = list(previousState, toggleItemEditing('2'));

      expect(result).toEqual(expectedState);
    });
  });
});
