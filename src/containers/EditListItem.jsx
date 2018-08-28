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

const mapDispatchToProps = dispatch => ({
  onSave: (id, text) => dispatch(saveItemText(id, text)),
  onDelete: id => dispatch(deleteItem(id)),
  onCancel: id => dispatch(toggleItemEditing(id))
});

export const EditListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditListItemComponent);
