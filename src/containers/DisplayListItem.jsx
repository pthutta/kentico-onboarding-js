import { connect } from 'react-redux';
import { toggleItemEditing } from '../actions/actionCreators';
import { DisplayListItem as DisplayListItemComponent } from '../components/DisplayListItem';

const mapStateToProps = ({ list: { items } }, ownProps) => ({
  text: items.get(ownProps.id).text
});

const mapDispatchToProps = dispatch => ({
  onEnableEditing: id => dispatch(toggleItemEditing(id))
});

export const DisplayListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayListItemComponent);
