import { connect } from 'react-redux';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing
} from '../actions/itemsActions';
import { EditListItem as EditListItemComponent } from '../components/EditListItem';

const mapStateToProps = ({ list: { items } }, ownProps) => ({
  text: items.get(ownProps.id).text
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  save: text => dispatch(saveItemText(ownProps.id, text)),
  delete: () => dispatch(deleteItem(ownProps.id)),
  cancel: () => dispatch(toggleItemEditing(ownProps.id))
});

export const EditListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditListItemComponent);
