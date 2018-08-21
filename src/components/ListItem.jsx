import React from 'react';
import PropTypes from 'prop-types';
import { EditListItem } from './EditListItem';
import { DisplayListItem } from './DisplayListItem';

export const ListItem = ({
  item, order, onSave, onDelete, onToggleItemEditing
}) => (
  item.isBeingEdited
    ? <EditListItem item={item} order={order} onSave={onSave} onDelete={onDelete} onCancel={onToggleItemEditing} />
    : <DisplayListItem item={item} order={order} onEnableEditing={onToggleItemEditing} />
);

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  order: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleItemEditing: PropTypes.func.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isBeingEdited: PropTypes.bool.isRequired
  }).isRequired
};
