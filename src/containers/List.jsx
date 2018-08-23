import * as memoizee from 'memoizee';
import { connect } from 'react-redux';
import { List as ListComponent } from '../components/List';

const getAllIds = memoizee(items => items.keySeq());

const mapStateToProps = state => ({
  itemIds: getAllIds(state.list.items)
});

export const List = connect(mapStateToProps)(ListComponent);
