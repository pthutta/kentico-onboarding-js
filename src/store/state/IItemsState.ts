import { OrderedMap } from 'immutable';
import { Item } from '../../models/Item';

export type IItemsState = OrderedMap<Guid, Item>;
