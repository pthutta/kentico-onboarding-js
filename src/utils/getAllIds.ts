import * as memoizee from 'memoizee';
import { IItemsState } from '../stores/IItemsState';

export const getAllIds = memoizee((items: IItemsState): Array<Guid> =>
  items.keySeq().toJS(),
);
