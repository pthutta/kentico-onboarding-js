import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class DisplayListItem extends PureComponent {
  static displayName = 'DisplayListItem';

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired
  };

  _labelOnClick = () => {
    const { id, text, onSave } = this.props;
    onSave({ id, text, isBeingEdited: true });
  };

  render() {
    const { text } = this.props;

    return (
      <label onClick={this._labelOnClick}>{text}</label>
    );
  }
}
