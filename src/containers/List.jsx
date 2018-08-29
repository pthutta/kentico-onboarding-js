import { connect } from 'react-redux';
import { List as ListComponent } from '../components/List';
import { getAllIds } from '../utils/getAllIds';

const mapStateToProps = state => ({
  itemIds: getAllIds(state.list.items)
});

export const List = connect(mapStateToProps)(ListComponent);
