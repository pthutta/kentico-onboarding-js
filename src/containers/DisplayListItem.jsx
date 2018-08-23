import { connect } from 'react-redux';
import { toggleItemEditing } from '../tmpName/actionCreators';
import { DisplayListItem as DisplayListItemComponent } from '../components/DisplayListItem';

const mapStateToProps = (state, ownProps) => ({
  text: state.items.get(ownProps.id).text
});

const mapDispatchToProps = dispatch => ({
  onEnableEditing: id => dispatch(toggleItemEditing(id))
});

export const DisplayListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayListItemComponent);
