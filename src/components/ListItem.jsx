import React from 'react';
import PropTypes from 'prop-types';
import { EditListItem } from '../containers/EditListItem';
import { DisplayListItem } from '../containers/DisplayListItem';
import { ItemRecord } from '../models/itemRecord';

export const ListItem = ({ item, order }) => (
  item.isBeingEdited
    ? <EditListItem item={item} order={order} />
    : <DisplayListItem item={item} order={order} />
);

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  order: PropTypes.number.isRequired,
  item: PropTypes.instanceOf(ItemRecord).isRequired,
};
