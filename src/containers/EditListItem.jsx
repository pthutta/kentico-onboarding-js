import { connect } from 'react-redux';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing
} from '../tmpName/actionCreators';
import { EditListItem as EditListItemComponent } from '../components/EditListItem';

const mapDispatchToProps = dispatch => ({
  onSave: (id, text) => dispatch(saveItemText(id, text)),
  onDelete: id => dispatch(deleteItem(id)),
  onCancel: id => dispatch(toggleItemEditing(id))
});

export const EditListItem = connect(
  null,
  mapDispatchToProps
)(EditListItemComponent);
