import { Record } from 'immutable';
import { IItem } from './IItem';

const defaultValues: IItem = {
  id: '',
  text: 'New item',
  isBeingEdited: false
};

export class Item extends Record(defaultValues, 'Item') implements IItem {
  readonly id: string;
  readonly isBeingEdited: boolean;
  readonly text: string;

  constructor(values?: Partial<IItem>) {
    values ? super(values) : super();
  }

  with(values: Partial<IItem>): this {
    return this.merge(values) as this;
  }
}

