import { OrderedMap } from 'immutable';
import { IItem } from './IItem';

export type IItemsState = OrderedMap<string, IItem>;
