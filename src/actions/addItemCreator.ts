import * as ActionType from './actionTypes';
import { IAction } from '../models/IAction';

export const addItemCreator = (idGenerator: () => string) => (text: string): IAction => ({
  type: ActionType.ADD_ITEM,
  payload: {
    text,
    id: idGenerator()
  }
});
