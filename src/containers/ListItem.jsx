import connect from 'react-redux/es/connect/connect';
import { ListItem as ListItemComponent } from '../components/ListItem';

const mapStateToProps = ({ list: { items } }, ownProps) => ({
  isBeingEdited: items.get(ownProps.id).isBeingEdited
});

export const ListItem = connect(mapStateToProps)(ListItemComponent);
