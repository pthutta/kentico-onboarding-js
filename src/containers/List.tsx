import * as React from 'react';
import { connect } from 'react-redux';
import { IListStateProps, List as ListComponent } from '../components/List';
import { IAppState } from '../models/IAppState';
import { getAllIds } from '../utils/getAllIds';

export interface IListContainerProps {

}

const mapStateToProps = (state: IAppState): IListStateProps => ({
  itemIds: getAllIds(state.list.items)
});

export const List: React.ComponentClass<IListContainerProps> = connect(mapStateToProps)(ListComponent);
