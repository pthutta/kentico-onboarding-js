import * as memoizee from 'memoizee';
import { IItemsState } from '../models/IItemsState';

export const getAllIds = memoizee((items: IItemsState): Array<string> =>
  items.keySeq().toJS()
);
