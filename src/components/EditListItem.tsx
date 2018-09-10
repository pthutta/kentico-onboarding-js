import * as React from 'react';
import { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';
import classNames from 'classnames';
import { isStringNonempty } from '../utils/isStringNonempty';

export type EditListItemContainerProps = {
  readonly id: Guid,
  readonly order: number,
};

export type EditListItemDispatchProps = {
  readonly save: (text: string) => void,
  readonly delete: () => void,
  readonly cancel: () => void,
};

export type EditListItemStateProps = {
  readonly text: string,
};

type EditListItemProps = EditListItemDispatchProps & EditListItemStateProps & EditListItemContainerProps;

type EditListItemState = {
  readonly inputText: string,
};

export class EditListItem extends PureComponent<EditListItemProps, EditListItemState> {
  static displayName: string = 'EditListItem';

  static propTypes: ValidationMap<EditListItemProps> = {
    order: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    save: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
  };

  state: EditListItemState = {
    inputText: this.props.text,
  };

  private _storeInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value: string = event.target.value;
    this.setState(() => ({ inputText: value }));
  };

  private _saveNewItemText = () => this.props.save(this.state.inputText);

  render(): JSX.Element {
    const isValid: boolean = isStringNonempty(this.state.inputText);
    const title: string | undefined = isValid
      ? undefined
      : 'Please enter text';
    const className = classNames('input-group', {
      'has-success': isValid,
      'has-error': !isValid,
    });

    return (
      <li className="list-group-item">
        <form className="form-inline" >
          <div>
            <div className="form-group">
              <label>{this.props.order}. </label>
              <div
                className={className}
              >
              <input
                className="form-control"
                value={this.state.inputText}
                onChange={this._storeInputValue}
              />
              <div className="input-group-btn">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this._saveNewItemText}
                  disabled={!isValid}
                  title={title}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={this.props.cancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.props.delete}
                >
                  Delete
                </button>
              </div>
              </div>
            </div>
          </div>
        </form>
      </li>
    );
  }
}
