import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class DisplayListItem extends PureComponent {
  static displayName = 'DisplayListItem';

  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
    onSetItemEditing: PropTypes.func.isRequired,
  };

  _enableEditing = () => this.props.onSetItemEditing(this.props.item.id, true);

  render() {
    return (
      <div className="form-group" onClick={this._enableEditing}>
        <label>{this.props.item.text}</label>
      </div>
    );
  }
}
