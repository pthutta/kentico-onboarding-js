import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isStringNonempty } from '../utils/isStringNonempty';

export class EditListItem extends PureComponent {
  static displayName = 'EditListItem';

  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  state = {
    itemText: this.props.item.text
  };

  _storeInputValue = event => {
    const value = event.target.value;
    this.setState(() => ({ itemText: value }));
  };

  _saveNewItemText = () => {
    this.props.onSave(
      this.props.item.id,
      this.state.itemText
    );
    this.props.onCancel();
  };

  _deleteItem = () => this.props.onDelete(this.props.item.id);

  render() {
    const isValid = isStringNonempty(this.state.itemText);
    const title = isValid
      ? undefined
      : 'Please enter text';

    return (
      <div
        className={classNames('input-group', {
          'has-success': isValid,
          'has-error': !isValid
        })}
      >
        <input
          className="form-control"
          value={this.state.itemText}
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
            onClick={this.props.onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this._deleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
