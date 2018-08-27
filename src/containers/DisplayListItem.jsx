import { connect } from 'react-redux';
import { toggleItemEditing } from '../actions/actionCreators';
import {
  DisplayListItem as DisplayListItemComponent,
  IDisplayListItemContainerProps, IDisplayListItemDispatchProps, IDisplayListItemStateProps
} from '../components/DisplayListItem';
import { Dispatch } from 'redux';
import * as React from 'react';
import { IAppState } from '../models/IAppState';

const mapStateToProps = (state: IAppState, ownProps: IDisplayListItemContainerProps): IDisplayListItemStateProps => ({
  text: state.list.items.get(ownProps.id).text
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IDisplayListItemContainerProps): IDisplayListItemDispatchProps => ({
  enableEditing: () => dispatch(toggleItemEditing(ownProps.id))
});

export const DisplayListItem: React.ComponentClass<IDisplayListItemContainerProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayListItemComponent);
