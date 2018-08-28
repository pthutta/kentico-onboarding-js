import { connect } from 'react-redux';
import { toggleItemEditing } from '../actions/itemsActions';
import { DisplayListItem as DisplayListItemComponent } from '../components/DisplayListItem';

const mapStateToProps = ({ list: { items } }, ownProps) => ({
  text: items.get(ownProps.id).text
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onEnableEditing: () => dispatch(toggleItemEditing(ownProps.id))
});

export const DisplayListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayListItemComponent);
