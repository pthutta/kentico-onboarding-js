import { OrderedMap } from 'immutable';
import { IItem } from './IItem';

export interface IListState {
  items: OrderedMap<string, IItem>;
}
