import connect from 'react-redux/es/connect/connect';
import { addItem } from '../tmpName/actionCreators';
import { NewListItem as NewListItemComponent } from '../components/NewListItem';

const mapDispatchToProps = {
  addItem
};

export const NewListItem = connect(
  null,
  mapDispatchToProps
)(NewListItemComponent);
