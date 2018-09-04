import { ModelBase } from './ModelBase';

export interface IItem {
  readonly id: Guid;
  readonly text: string;
  readonly isBeingEdited: boolean;
}

const defaultValues: IItem = {
  id: '',
  text: 'New item',
  isBeingEdited: false,
};

export class Item extends ModelBase(defaultValues, 'Item') implements IItem {
  readonly id: Guid;
  readonly isBeingEdited: boolean;
  readonly text: string;
}

