import React from 'react';
import PropTypes from 'prop-types';
import { EditListItem } from './EditListItem';
import { DisplayListItem } from './DisplayListItem';

export const ListItem = ({
  item, order, onSave, onDelete, onSetItemEditing
}) => (
    <li className="list-group-item">
      <form className="form-inline">
        <div>
          <div className="form-group">
            <label>{order}. </label>
          </div>
          {
            item.isBeingEdited
              ? <EditListItem item={item} onSave={onSave} onDelete={onDelete} onSetItemEditing={onSetItemEditing}/>
              : <DisplayListItem item={item} onSetItemEditing={onSetItemEditing}/>
          }
        </div>
      </form>
    </li>
);

ListItem.displayName = 'ListItem';
ListItem.propTypes = {
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
