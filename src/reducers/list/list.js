import { items } from './items';

export const list = (state, action) => ({
  items: items(state.items, action)
});
