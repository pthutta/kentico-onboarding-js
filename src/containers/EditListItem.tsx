import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing,
} from '../actions/itemsActions';
import {
  EditListItem as EditListItemComponent,
  IEditListItemStateProps, IEditListItemDispatchProps,
} from '../components/EditListItem';
import { IAppState } from '../store/state/IAppState';

export interface IEditListItemContainerProps {
  readonly id: Guid;
  readonly order: number;
}

const mapStateToProps = (state: IAppState, ownProps: IEditListItemContainerProps): IEditListItemStateProps => ({
  text: state.list.items.get(ownProps.id).text,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IEditListItemContainerProps): IEditListItemDispatchProps => ({
  save: (text: string) => dispatch(saveItemText(ownProps.id, text)),
  delete: () => dispatch(deleteItem(ownProps.id)),
  cancel: () => dispatch(toggleItemEditing(ownProps.id)),
});

const mergeProps = (stateProps: IEditListItemStateProps, dispatchProps: IEditListItemDispatchProps, ownProps: IEditListItemContainerProps) => {
  const { order } = ownProps;

  return {
    ...stateProps,
    ...dispatchProps,
    order,
  };
};

export const EditListItem: React.ComponentClass<IEditListItemContainerProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(EditListItemComponent);
