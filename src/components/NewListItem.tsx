import * as React from 'react';
import { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isStringNonempty } from '../utils/isStringNonempty';
import { ValidationMap } from 'prop-types';

export interface INewListItemDispatchProps {
  readonly addItem: (text: string) => void;
}

type INewListItemProps = INewListItemDispatchProps;

interface INewListItemState {
  readonly inputText: string;
}

export class NewListItem extends PureComponent<INewListItemProps, INewListItemState> {
  static displayName: string = 'NewListItem';

  static propTypes: ValidationMap<INewListItemProps> = {
    addItem: PropTypes.func.isRequired
  };

  state = {
    inputText: ''
  };

  _storeInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.currentTarget.value;
    this.setState(() => ({ inputText: value }));
  };

  _addNewItem = (): void => {
    this.props.addItem(this.state.inputText);
    this.setState(() => ({ inputText: '' }));
  };

  render(): JSX.Element {
    const { inputText } = this.state;
    const isValid: boolean = isStringNonempty(inputText);
    const title: any = isValid
      ? undefined
      : 'Please enter text';
    const className: string = classNames('form-group', {
      'has-success': isValid,
      'has-error': !isValid
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
