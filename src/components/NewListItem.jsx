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
    itemText: ''
  };

  _storeInputValue = event => {
    const value = event.target.value;
    this.setState(() => ({ itemText: value }));
  };

  _addNewItem = () => {
    this.props.onAddItem(this.state.itemText);
    this.setState(() => ({ itemText: '' }));
  };

  render() {
    const { itemText } = this.state;
    const isValid = isStringNonempty(itemText);
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
            value={itemText}
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
