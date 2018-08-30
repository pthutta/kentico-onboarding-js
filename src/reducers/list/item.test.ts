import { item } from './item';
import { Item } from '../../models/Item';
import { addItemCreator } from '../../actions/creators/addItemCreator';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing,
} from '../../actions/itemsActions';
import { IItem } from '../../models/Item';

describe('item', () => {
  it('initializes state with default Item Record value', () => {
    const previousState: IItem | undefined = undefined;
    const expectedState: IItem = new Item();

    const result: IItem = item(previousState, deleteItem('1'));

    expect(result).toEqual(expectedState);
  });

  describe('addItem', () => {
    it('returns item with correct text', () => {
      const previousState: IItem = new Item();
      const text: string = 'Learn redux';
      const idGenerator = () => '1';
      const expectedState: IItem = new Item({
        id: idGenerator(),
        text,
      });

      const result: IItem = item(previousState, addItemCreator(idGenerator)(text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('saveItemText', () => {
    it('returns item with saved text', () => {
      const previousState: IItem = new Item({
        id: '1',
        text: 'Learn react',
      });
      const text: string = 'Learn redux';
      const expectedState: IItem = new Item({
        id: '1',
        text,
      });

      const result: IItem = item(previousState, saveItemText(previousState.id, text));

      expect(result).toEqual(expectedState);
    });
  });

  describe('toggleItemEditing', () => {
    it('returns item with toggled isBeingEdited', () => {
      const previousState: IItem = new Item({
        id: '1',
        text: 'Learn react',
      });
      const expectedState: IItem = (previousState as Item).with({ isBeingEdited: true });

      const result: IItem = item(previousState, toggleItemEditing(previousState.id));

      expect(result).toEqual(expectedState);
    });
  });
});
