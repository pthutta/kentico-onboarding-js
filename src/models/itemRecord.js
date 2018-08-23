import { Record } from 'immutable';

const defaultValues = {
  id: '',
  text: 'New item',
  isBeingEdited: false
};

export const Item = Record(defaultValues, 'Item');
