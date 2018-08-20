import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { EditListItem } from './EditListItem';
import { DisplayListItem } from './DisplayListItem';

export class ListItem extends PureComponent {
  static displayName = 'ListItem';

  static propTypes = {
    order: PropTypes.number.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onSetItemEditing: PropTypes.func.isRequired,
    item: PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isBeingEdited: PropTypes.bool.isRequired
    }).isRequired
  };

  _toggleItemEditing = () => {
    const { item, onSetItemEditing } = this.props;
    onSetItemEditing(item.id, !item.isBeingEdited);
  };

  render() {
    const {
      item, order, onSave, onDelete
    } = this.props;

    return (
      <li className="list-group-item">
        <form className="form-inline">
          <div>
            <div className="form-group">
              <label>{order}. </label>
            </div>
            {
              item.isBeingEdited
                ? <EditListItem item={item} onSave={onSave} onDelete={onDelete} onCancel={this._toggleItemEditing} />
                : <DisplayListItem item={item} onEnableEditing={this._toggleItemEditing} />
            }
          </div>
        </form>
      </li>
    );
  }
}
