import * as ActionType from './actionTypes';

export const addItemCreator = idGenerator => text => ({
  type: ActionType.ADD_ITEM,
  payload: {
    text,
    id: idGenerator()
  }
});
