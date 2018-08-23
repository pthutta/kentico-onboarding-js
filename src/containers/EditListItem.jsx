import { connect } from 'react-redux';
import {
  deleteItem,
  saveItemText,
  toggleItemEditing
} from '../tmpName/actionCreators';
import { EditListItem as EditListItemComponent } from '../components/EditListItem';

const mapStateToProps = (state, ownProps) => ({
  text: state.items.get(ownProps.id).text
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
