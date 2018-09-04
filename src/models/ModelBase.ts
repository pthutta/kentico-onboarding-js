import { Record } from 'immutable';

export const ModelBase = <T>(defaultValues: T, name: string) =>
  class ModelBaseClass extends Record(defaultValues, name) {
    constructor(values?: Partial<T>) {
      values ? super(values) : super();
    }

    with(values: Partial<T>): this {
      return this.merge(values) as this;
    }
  };
