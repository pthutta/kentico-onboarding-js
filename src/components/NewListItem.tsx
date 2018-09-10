import * as React from 'react';
import { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';
import classNames from 'classnames';
import { isStringNonempty } from '../utils/isStringNonempty';

export type NewListItemDispatchProps = {
  readonly addItem: (text: string) => void,
};

type NewListItemProps = NewListItemDispatchProps;

type NewListItemState = {
  readonly inputText: string,
};

export class NewListItem extends PureComponent<NewListItemProps, NewListItemState> {
  static displayName: string = 'NewListItem';

  static propTypes: ValidationMap<NewListItemProps> = {
    addItem: PropTypes.func.isRequired,
  };

  state: NewListItemState = {
    inputText: '',
  };

  private _storeInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.currentTarget.value;
    this.setState(() => ({ inputText: value }));
  };

  private _addNewItem = (): void => {
    this.props.addItem(this.state.inputText);
    this.setState(() => ({ inputText: '' }));
  };

  render(): JSX.Element {
    const { inputText } = this.state;
    const isValid: boolean = isStringNonempty(inputText);
    const title: string | undefined = isValid
      ? undefined
      : 'Please enter text';
    const className: string = classNames('form-group', {
      'has-success': isValid,
      'has-error': !isValid,
    });

    return (
      <form className="form-inline">
        <div className={className}>
          <input
            type="text"
            className="form-control"
            value={inputText}
            placeholder="New item"
            onChange={this._storeInputValue}
          />
          <button
            type="button"
            className="btn btn-default"
            onClick={this._addNewItem}
            disabled={!isValid}
            title={title}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}
