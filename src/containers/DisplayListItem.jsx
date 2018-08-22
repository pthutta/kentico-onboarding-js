import { connect } from 'react-redux';
import { toggleItemEditing } from '../tmpName/actionCreators';
import { DisplayListItem as DisplayListItemComponent } from '../components/DisplayListItem';

const mapDispatchToProps = dispatch => ({
  onEnableEditing: id => dispatch(toggleItemEditing(id))
});

export const DisplayListItem = connect(
  null,
  mapDispatchToProps
)(DisplayListItemComponent);
