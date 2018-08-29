import { IAction } from './IAction';

export interface AddItemAction extends IAction<'ADD_ITEM', {id: GUID, text: string}> {}
export interface SaveItemTextAction extends IAction<'SAVE_ITEM_TEXT', {id: GUID, text: string}> {}
export interface DeleteItemAction extends IAction<'DELETE_ITEM', {id: GUID}> {}
export interface ToggleItemEditingAction extends IAction<'TOGGLE_ITEM_EDITING', {id: GUID}> {}

export type Actions =
  | AddItemAction
  | SaveItemTextAction
  | DeleteItemAction
  | ToggleItemEditingAction;
