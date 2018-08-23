import connect from 'react-redux/es/connect/connect';
import { ListItem as ListItemComponent } from '../components/ListItem';

const mapStateToProps = (state, ownProps) => ({
  isBeingEdited: state.items.get(ownProps.id).isBeingEdited
});

export const ListItem = connect(mapStateToProps)(ListItemComponent);
