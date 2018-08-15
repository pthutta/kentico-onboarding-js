import React, { PureComponent } from 'react';

export class ListItem extends PureComponent {
  constructor(props) {
    super();

    this.state = {
      newItemText: props.text,
      isBeingEdited: false
    };
  }

  _handleItemTextChange = (e) => {
    this.setState({ newItemText: e.target.value });
  };

  _labelOnClick = () => {
    this.setState(state => {
      return { isBeingEdited: !state.isBeingEdited };
    });
  };

  _saveOnClick = () => {
    const { id, onSave } = this.props;
    onSave(id, this.state.newItemText);
    this.setState({
      isBeingEdited: false
    });
  };

  _deleteOnClick = () => {
    const { id, onDelete } = this.props;
    onDelete(id);
    this.setState({
      isBeingEdited: false
    });
  };

  render() {
    const { order, text } = this.props;
    const { newItemText } = this.state;
    const isEnabled = newItemText.trim().length > 0;

    return (
      <li className="list-group-item">
        <form className="form-inline">
          <div className={"form-group " + (isEnabled ? "has-success" : "has-error")}>
            <label>{order}. </label>
            {this.state.isBeingEdited ? (
              <span>
                <input className="form-control" value={this.state.newItemText} onChange={this._handleItemTextChange}/>
                <button type="button" className="btn btn-primary" onClick={this._saveOnClick} disabled={!isEnabled}>Save</button>
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
