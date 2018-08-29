import { AddItemAction } from '../types/itemsActionTypes';

export const addItemCreator = (idGenerator: () => GUID) => (text: string): AddItemAction => ({
  type: 'ADD_ITEM',
  payload: {
    text,
    id: idGenerator()
  }
});
