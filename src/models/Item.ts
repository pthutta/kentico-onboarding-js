import { Record } from 'immutable';
import { IItem } from './IItem';
// interface read-only
const defaultValues: IItem = {
  id: '',
  text: 'New item',
  isBeingEdited: false
};

export class Item extends Record(defaultValues, 'Item') implements IItem {
  id: string;
  isBeingEdited: boolean;
  text: string;

  constructor(values?: Partial<IItem>) {
    values ? super(values) : super();
  }

  with(values: Partial<IItem>): this {
    return this.merge(values) as this;
  }
}

