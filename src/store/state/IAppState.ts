import { IItemsState } from './IItemsState';

interface IListState {
  readonly items: IItemsState;
}

export interface IAppState {
  readonly list: IListState;
}
