import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteItem, saveItemText, toggleItemEditing } from '../actions/itemsActions';
import {
  EditListItem as EditListItemComponent,
  EditListItemContainerProps,
  EditListItemDispatchProps,
  EditListItemStateProps,
} from '../components/EditListItem';
import { IAppState } from '../store/state/IAppState';

const mapStateToProps = (state: IAppState, ownProps: EditListItemContainerProps): EditListItemStateProps => ({
  text: state.list.items.get(ownProps.id).text,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: EditListItemContainerProps): EditListItemDispatchProps => ({
  save: (text: string) => dispatch(saveItemText(ownProps.id, text)),
  delete: () => dispatch(deleteItem(ownProps.id)),
  cancel: () => dispatch(toggleItemEditing(ownProps.id)),
});

export const EditListItem: React.ComponentClass<EditListItemContainerProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditListItemComponent);
