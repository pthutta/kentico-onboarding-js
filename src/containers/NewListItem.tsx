import * as React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemsActions';
import {
  NewListItemDispatchProps,
  NewListItem as NewListItemComponent,
} from '../components/NewListItem';

const mapDispatchToProps: NewListItemDispatchProps = {
  addItem,
};

export const NewListItem: React.ComponentClass = connect(
  null,
  mapDispatchToProps,
)(NewListItemComponent);
