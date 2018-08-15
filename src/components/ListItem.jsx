import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { checkStringLength } from '../utils/UtilFunctions';

export class ListItem extends PureComponent {
  static displayName = 'List Item';

  static propTypes = {
    order: PropTypes.number,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    id: PropTypes.string,
    text: PropTypes.string,
    isBeingEdited: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      newItemText: props.text,
      isBeingEdited: false
    };
  }

  _handleItemTextChange = e => {
    e.persist();
    this.setState(() => ({ newItemText: e.target.value }));
  };

  _labelOnClick = () => {
    this.setState((state, props) => ({
      isBeingEdited: !state.isBeingEdited,
      newItemText: props.text
    }));
  };

  _saveOnClick = () => {
    const { id, onSave } = this.props;
    onSave(id, this.state.newItemText);
    this.setState(() => ({ isBeingEdited: false }));
  };

  _deleteOnClick = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
    this.setState(() => ({ isBeingEdited: false }));
  };

  render() {
    const { order, text } = this.props;
    const { newItemText } = this.state;
    const isValid = checkStringLength(newItemText);

    return (
      <li className="list-group-item">
        <form className="form-inline">
          <div className={classNames("form-group", { 'has-success': isValid }, { 'has-error': !isValid })}>
            <label>{order}. </label>
            {this.state.isBeingEdited ? (
              <span>
                <input className="form-control" value={this.state.newItemText} onChange={this._handleItemTextChange}/>
                <button type="button" className="btn btn-primary" onClick={this._saveOnClick} disabled={!isValid}>Save</button>
                <button type="button" className="btn btn-default" onClick={this._labelOnClick}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={this._deleteOnClick}>Delete</button>
              </span>
            ) : <label onClick={this._labelOnClick}>{text}</label>}
          </div>
        </form>
      </li>
    );
  }
}
