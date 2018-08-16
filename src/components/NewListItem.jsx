import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validateString } from '../utils/UtilFunctions';

export class NewListItem extends PureComponent {
  static displayName = 'NewListItem';

  static propTypes = {
    addItem: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      newItem: ''
    };
  }

  _handleItemChange = e => {
    e.persist();
    this.setState(() => ({ newItem: e.target.value }));
  };

  _buttonOnClick = () => {
    const { addItem } = this.props;
    const { newItem } = this.state;
    addItem(newItem);
    this.setState(() => ({ newItem: '' }));
  };

  render() {
    const { newItem } = this.state;

    const isValid = validateString(newItem);
    return (
      <form className="form-inline">
        <div
          className={classNames('form-group', {
            'has-success': isValid,
            'has-error': !isValid
          })}
        >
          <input
            type="text"
            className="form-control"
            value={newItem}
            placeholder="New item"
            onChange={this._handleItemChange}
          />
          <button
            type="button"
            className="btn btn-default"
            onClick={this._buttonOnClick}
            disabled={!isValid}
            title={
              isValid
                ? ''
                : 'Please enter text'
            }
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}
