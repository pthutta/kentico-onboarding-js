import { AddItemAction } from './actionTypes';

export const addItemCreator = (idGenerator: () => string) => (text: string): AddItemAction => ({
  type: 'ADD_ITEM',
  payload: {
    text,
    id: idGenerator()
  }
});
