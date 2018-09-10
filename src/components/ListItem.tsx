import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';
import { EditListItem } from '../containers/EditListItem';
import { DisplayListItem } from '../containers/DisplayListItem';

export type ListItemContainerProps = {
  readonly id: Guid,
  readonly order: number,
};

export type ListItemStateProps = {
  readonly isBeingEdited: boolean,
};

type ListItemProps = ListItemStateProps & ListItemContainerProps;

const listItemPropTypes: ValidationMap<ListItemProps> = {
  order: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  isBeingEdited: PropTypes.bool.isRequired,
};

export const ListItem: React.StatelessComponent<ListItemProps> = ({ order, id, isBeingEdited }): JSX.Element => (
  isBeingEdited
    ? <EditListItem id={id} order={order} />
    : <DisplayListItem id={id} order={order} />
);

ListItem.displayName = 'ListItem';
ListItem.propTypes = listItemPropTypes;
