import { IAction } from './IAction';

export interface AddItemAction extends IAction<'ADD_ITEM', {id: Guid, text: string}> {}
export interface SaveItemTextAction extends IAction<'SAVE_ITEM_TEXT', {id: Guid, text: string}> {}
export interface DeleteItemAction extends IAction<'DELETE_ITEM', {id: Guid}> {}
export interface ToggleItemEditingAction extends IAction<'TOGGLE_ITEM_EDITING', {id: Guid}> {}

export type Actions =
  | AddItemAction
  | SaveItemTextAction
  | DeleteItemAction
  | ToggleItemEditingAction;
