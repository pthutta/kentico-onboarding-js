import { OrderedMap } from 'immutable';
import { IItem } from '../models/Item';

export type IItemsState = OrderedMap<Guid, IItem>;
