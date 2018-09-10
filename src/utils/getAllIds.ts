import * as memoizee from 'memoizee';
import { IItemsState } from '../store/state/IItemsState';

export const getAllIds = memoizee((items: IItemsState): Array<Guid> =>
  items.keySeq().toJS(),
);
