import { item } from './item';
import { Item } from '../../models/Item';
import { addItemCreator } from '../../actions/creators/addItemCreator';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing,
} from '../../actions/itemsActions';

describe('item', () => {
  it('initializes state with default Item Record value', () => {
    const previousState: Item | undefined = undefined;
    const expectedState: Item = new Item();

    const result: Item = item(previousState, deleteItem('1'));

    expect(result).toEqual(expectedState);
  });

  describe('addItem', () => {
    it('returns item with correct text', () => {
      const previousState: Item = new Item();
      const text: string = 'Learn redux';
      const idGenerator = () => '1';
      const expectedState: Item = new Item({
        id: idGenerator(),
        text,
      });

      const result: Item = item(previousState, addItemCreator(idGenerator)(text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('saveItemText', () => {
    it('returns item with saved text', () => {
      const previousState: Item = new Item({
        id: '1',
        text: 'Learn react',
      });
      const text: string = 'Learn redux';
      const expectedState: Item = new Item({
        id: '1',
        text,
      });

      const result: Item = item(previousState, saveItemText(previousState.id, text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('toggleItemEditing', () => {
    it('returns item with toggled isBeingEdited', () => {
      const previousState: Item = new Item({
        id: '1',
        text: 'Learn react',
      });
      const expectedState: Item = previousState.with({ isBeingEdited: true });

      const result: Item = item(previousState, toggleItemEditing(previousState.id));

      expect(result).toEqual(expectedState);
    });
  });
});
