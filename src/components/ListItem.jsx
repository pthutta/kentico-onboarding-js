import React from 'react';
import PropTypes from 'prop-types';
import { EditListItem } from '../containers/EditListItem';
import { DisplayListItem } from '../containers/DisplayListItem';

export const ListItem = ({ order, id, isBeingEdited }) => (
  isBeingEdited
    ? <EditListItem id={id} order={order} />
    : <DisplayListItem id={id} order={order} />
);

ListItem.displayName = 'ListItem';

ListItem.propTypes = {
  order: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  isBeingEdited: PropTypes.bool.isRequired
};
