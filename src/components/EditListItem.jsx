import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isStringNonempty } from '../utils/isStringNonempty';

export class EditListItem extends PureComponent {
  static displayName = 'EditListItem';

  static propTypes = {
    order: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  state = {
    inputText: this.props.text
  };

  _storeInputValue = event => {
    const value = event.target.value;
    this.setState(() => ({ inputText: value }));
  };

  _saveNewItemText = () => this.props.onSave(this.state.inputText);

  render() {
    const isValid = isStringNonempty(this.state.inputText);
    const title = isValid
      ? undefined
      : 'Please enter text';

    return (
      <li className="list-group-item">
        <form className="form-inline" >
          <div>
            <div className="form-group">
              <label>{this.props.order}. </label>
              <div
                className={classNames('input-group', {
                  'has-success': isValid,
                  'has-error': !isValid
                })}
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
                  onClick={this.props.onCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.props.onDelete}
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
