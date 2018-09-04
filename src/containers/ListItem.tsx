import * as React from 'react';
import { connect } from 'react-redux';
import {
  IListItemContainerProps,
  IListItemStateProps,
  ListItem as ListItemComponent,
} from '../components/ListItem';
import { IAppState } from '../store/state/IAppState';

const mapStateToProps = (state: IAppState, ownProps: IListItemContainerProps): IListItemStateProps => ({
  isBeingEdited: state.list.items.get(ownProps.id).isBeingEdited,
});

export const ListItem: React.ComponentClass<IListItemContainerProps> = connect(mapStateToProps)(ListItemComponent);
