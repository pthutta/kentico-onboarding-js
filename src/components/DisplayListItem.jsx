import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class DisplayListItem extends PureComponent {
  static displayName = 'DisplayListItem';

  static propTypes = {
    order: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onEnableEditing: PropTypes.func.isRequired
  };

  _enableEditing = () => this.props.onEnableEditing(this.props.id);

  render() {
    return (
      <li className="list-group-item">
        <form className="form-inline" >
          <div onClick={this._enableEditing}>
            <div className="form-group">
              <label>{this.props.order}. </label>
              <label>{this.props.text}</label>
            </div>
          </div>
        </form>
      </li>
    );
  }
}
