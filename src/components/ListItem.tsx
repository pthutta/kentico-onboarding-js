import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';
import { EditListItem } from '../containers/EditListItem';
import { DisplayListItem } from '../containers/DisplayListItem';

export interface IListItemContainerProps {
  readonly id: GUID;
  readonly order: number;
}

export interface IListItemStateProps {
  readonly isBeingEdited: boolean;
}

type ListItemProps = IListItemStateProps & IListItemContainerProps;

const listItemPropTypes: ValidationMap<ListItemProps> = {
  order: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  isBeingEdited: PropTypes.bool.isRequired
};

export const ListItem: React.StatelessComponent<ListItemProps> = ({ order, id, isBeingEdited }): JSX.Element => (
  isBeingEdited
    ? <EditListItem id={id} order={order} />
    : <DisplayListItem id={id} order={order} />
);

ListItem.displayName = 'ListItem';
ListItem.propTypes = listItemPropTypes;
