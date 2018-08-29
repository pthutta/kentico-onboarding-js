import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleItemEditing } from '../actions/itemsActions';
import {
  DisplayListItem as DisplayListItemComponent,
  IDisplayListItemDispatchProps,
  IDisplayListItemStateProps
} from '../components/DisplayListItem';
import { IAppState } from '../models/IAppState';

export interface IDisplayListItemContainerProps {
  readonly id: GUID;
  readonly order: number;
}

const mapStateToProps = (state: IAppState, ownProps: IDisplayListItemContainerProps): IDisplayListItemStateProps => ({
  text: state.list.items.get(ownProps.id).text
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IDisplayListItemContainerProps): IDisplayListItemDispatchProps => ({
  enableEditing: () => dispatch(toggleItemEditing(ownProps.id))
});

const mergeProps = (stateProps: IDisplayListItemStateProps, dispatchProps: IDisplayListItemDispatchProps, ownProps: IDisplayListItemContainerProps) => {
  const { order } = ownProps;

  return {
    ...stateProps,
    ...dispatchProps,
    order
  };
};

export const DisplayListItem: React.ComponentClass<IDisplayListItemContainerProps> = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(DisplayListItemComponent);
