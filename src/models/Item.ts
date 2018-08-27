import { Record } from 'immutable';
import { IItem } from './IItem';

const defaultValues: IItem = {
  id: '',
  text: 'New item',
  isBeingEdited: false
};

export const Item = Record(defaultValues, 'Item');
