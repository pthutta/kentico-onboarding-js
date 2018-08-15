import React, { PureComponent } from 'react';

export class ListItem extends PureComponent {
  constructor(props) {
    super(props);

    this.newItemText = React.createRef();

    this.state = {
      isBeingEdited: false
    };
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
    this.setState({
      isBeingEdited: false
    });
    onDelete(id);
  };

  render() {
    const { order, text } = this.props;

    return (
      <li className="list-group-item">
        <form className="form-inline">
          <div className="form-group">
            <label className="card-text">{order}. </label>
            {this.state.isBeingEdited ? (
              <span>
                <input defaultValue={text} ref={this.newItemText} className="form-control"/>
                <button type="submit" onClick={this._saveOnClick} className="btn btn-primary">Save</button>
                <button type="submit" onClick={this._labelOnClick} className="btn btn-default">Cancel</button>
                <button type="submit" onClick={this._deleteOnClick} className="btn btn-danger">Delete</button>
              </span>
            ) : <label onClick={this._labelOnClick} className="card-text">{text}</label>}
          </div>
        </form>
      </li>
    );
  }
}
