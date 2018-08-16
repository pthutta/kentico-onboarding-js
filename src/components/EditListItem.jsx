import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { checkStringLength } from '../utils/UtilFunctions';

export class EditListItem extends PureComponent {
  static displayName = 'Edit List Item';

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      newItemText: props.text
    };
  }

  _handleItemTextChange = e => {
    e.persist();
    this.setState(() => ({ newItemText: e.target.value }));
  };

  _cancelOnClick = () => {
    const { id, text, onSave } = this.props;
    onSave({ id, text, isBeingEdited: false });
    this.setState((state, props) => ({
      newItemText: props.text
    }));
  };

  _saveOnClick = () => {
    const { id, onSave } = this.props;
    onSave({ id, text: this.state.newItemText, isBeingEdited: false });
    this.setState(() => ({ isBeingEdited: false }));
  };

  _deleteOnClick = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const isValid = checkStringLength(this.state.newItemText);

    return (
      <div className={classNames('form-group', { 'has-success': isValid }, { 'has-error': !isValid })}>
        <span>
          <input className="form-control" value={this.state.newItemText} onChange={this._handleItemTextChange}/>
          <button type="button" className="btn btn-primary" onClick={this._saveOnClick} disabled={!isValid} title={isValid ? '' : 'Please enter text'}>Save</button>
          <button type="button" className="btn btn-default" onClick={this._cancelOnClick}>Cancel</button>
          <button type="button" className="btn btn-danger" onClick={this._deleteOnClick}>Delete</button>
        </span>
      </div>
    );
  }
}
