import React, { PureComponent } from 'react';

export class ListItem extends PureComponent {
  constructor() {
    super();

    this.state = {
      isBeingEdited: false
    };

    this.newItemText = React.createRef();
  }

  _labelOnClick = () => {
    this.setState(state => {
      return { isBeingEdited: !state.isBeingEdited };
    });
  };

  _saveOnClick = () => {
    const { id, onSave } = this.props;
    onSave(id, this.newItemText.current.value);
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

    return (
      <li className="list-group-item">
        <form className="form-inline">
          <div className="form-group">
            <label>{order}. </label>
            {this.state.isBeingEdited ? (
              <span>
                <input className="form-control" ref={this.newItemText} defaultValue={text}/>
                <button type="button" className="btn btn-primary" onClick={this._saveOnClick}>Save</button>
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
