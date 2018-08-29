import { OrderedMap } from 'immutable';
import { IItem } from './Item';

export type IItemsState = OrderedMap<GUID, IItem>;
