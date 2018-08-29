import * as React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemsActions';
import {
  INewListItemDispatchProps,
  NewListItem as NewListItemComponent
} from '../components/NewListItem';

const mapDispatchToProps: INewListItemDispatchProps = {
  addItem
};

export const NewListItem: React.ComponentClass = connect(
  null,
  mapDispatchToProps
)(NewListItemComponent);
