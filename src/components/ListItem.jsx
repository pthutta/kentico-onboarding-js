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

  render() {
    const { order, text } = this.props;

    return (
      <div>
        <label>{order}.</label>
        {this.state.isBeingEdited ? (
          <span>
            <input defaultValue={text} ref={this.newItemText}/>
            <button type="submit" onClick={this._saveOnClick}>Save</button>
            <button type="submit" onClick={this._labelOnClick}>Cancel</button>
            <button type="submit">Delete</button>
          </span>
        ) : <label onClick={this._labelOnClick}>{text}</label>}
      </div>
    );
  }
}
