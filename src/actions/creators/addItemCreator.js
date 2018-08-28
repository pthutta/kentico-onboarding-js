import * as ActionType from '../types/itemsActionTypes';

export const addItemCreator = idGenerator => text => ({
  type: ActionType.ADD_ITEM,
  payload: {
    text,
    id: idGenerator()
  }
});
