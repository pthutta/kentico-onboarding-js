import { IAction } from '../models/IAction';

export interface AddItemAction extends IAction<'ADD_ITEM', {id: string, text: string}> {}
export interface SaveItemTextAction extends IAction<'SAVE_ITEM_TEXT', {id: string, text: string}> {}
export interface DeleteItemAction extends IAction<'DELETE_ITEM', {id: string}> {}
export interface ToggleItemEditingAction extends IAction<'TOGGLE_ITEM_EDITING', {id: string}> {}

export type Actions = AddItemAction | SaveItemTextAction | DeleteItemAction | ToggleItemEditingAction;
