import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isStringNonempty } from '../utils/isStringNonempty';

export class NewListItem extends PureComponent {
  static displayName = 'NewListItem';

  static propTypes = {
    onAddItem: PropTypes.func.isRequired
  };

  state = {
    inputText: ''
  };

  _storeInputValue = event => {
    const value = event.target.value;
    this.setState(() => ({ inputText: value }));
  };

  _addNewItem = () => {
    this.props.onAddItem(this.state.inputText);
    this.setState(() => ({ inputText: '' }));
  };

  render() {
    const { inputText } = this.state;
    const isValid = isStringNonempty(inputText);
    const title = isValid
      ? undefined
      : 'Please enter text';

    return (
      <form className="form-inline">
        <div
          className={classNames('form-group', {
            'has-success': isValid,
            'has-error': !isValid
          })}
        >
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
