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
  onSave: text => dispatch(saveItemText(ownProps.id, text)),
  onDelete: () => dispatch(deleteItem(ownProps.id)),
  onCancel: () => dispatch(toggleItemEditing(ownProps.id))
});

export const EditListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditListItemComponent);
