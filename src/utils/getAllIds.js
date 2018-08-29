import * as memoizee from 'memoizee';

export const getAllIds = memoizee(items => items.keySeq());
