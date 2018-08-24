import * as ActionType from './actionTypes';

export const addItemCreator = (idGenerator: () => string) => (text: string) => ({
  type: ActionType.ADD_ITEM,
  payload: {
    text,
    id: idGenerator()
  }
});
