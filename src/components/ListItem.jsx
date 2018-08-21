import React from 'react';
import PropTypes from 'prop-types';
import { EditListItem } from './EditListItem';
import { DisplayListItem } from './DisplayListItem';
import { ItemRecord } from '../models/itemRecord';

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
  item: PropTypes.instanceOf(ItemRecord).isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleItemEditing: PropTypes.func.isRequired
};
