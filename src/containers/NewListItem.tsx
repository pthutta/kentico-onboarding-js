import { connect } from 'react-redux';
import { addItem } from '../actions/itemsActions';
import { NewListItem as NewListItemComponent } from '../components/NewListItem';
import * as React from 'react';

interface INewListItemContainerProps {

}

const mapDispatchToProps = {
  addItem
};

export const NewListItem: React.ComponentClass<INewListItemContainerProps> = connect(
  null,
  mapDispatchToProps
)(NewListItemComponent);
