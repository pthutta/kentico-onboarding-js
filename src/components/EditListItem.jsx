import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isStringNonempty } from '../utils/isStringNonempty';

export class EditListItem extends PureComponent {
  static displayName = 'EditListItem';

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  state = {
    newItemText: this.props.text
  };

  _storeInputValue = event => {
    const value = event.target.value;
    this.setState(() => ({ newItemText: value }));
  };

  _cancelEditing = () => {
    const { id, text, onSave } = this.props;
    onSave({ id, text, isBeingEdited: false });
  };

  _saveNewItemText = () => {
    const { id, onSave } = this.props;
    onSave({ id, text: this.state.newItemText, isBeingEdited: false });
  };

  _deleteItem = () => this.props.onDelete(this.props.id);

  render() {
    const isValid = isStringNonempty(this.state.newItemText);
    const title = isValid
      ? undefined
      : 'Please enter text';

    return (
      <div
        className={classNames('form-group', {
          'has-success': isValid,
          'has-error': !isValid
        })}
      >
        <span>
          <input
            className="form-control"
            value={this.state.newItemText}
            onChange={this._storeInputValue}
          />
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
            onClick={this._cancelEditing}
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
        </span>
      </div>
    );
  }
}
