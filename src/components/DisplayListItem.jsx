import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class DisplayListItem extends PureComponent {
  static displayName = 'DisplayListItem';

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired
  };

  _enableEditing = () => {
    const { id, text, onSave } = this.props;
    onSave({ id, text, isBeingEdited: true });
  };

  render() {
    const { text } = this.props;

    return (
      <div onClick={this._enableEditing}>
        <label>{text}</label>
      </div>
    );
  }
}
