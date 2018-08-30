import * as React from 'react';
import { StatelessComponent } from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';
import { TsComponent } from './TsComponent';
import { ListItem } from '../containers/ListItem';
import { NewListItem } from '../containers/NewListItem';

export interface IListStateProps {
  readonly itemIds: Array<Guid>;
}

type ListProps = IListStateProps;

const listPropTypes: ValidationMap<ListProps> = {
  itemIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export const List: StatelessComponent<ListProps> = ({ itemIds }): JSX.Element => {
  const items: JSX.Element[] = itemIds.map((itemId: Guid, i: number) =>
    <ListItem key={itemId} order={i + 1} id={itemId} />,
  );

  return (
    <div className="row">
      <div className="row">
        <div className="col-sm-12 text-center">
          <TsComponent name="𝕱𝖆𝖓𝖈𝖞" invisible={true} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-offset-2 col-md-8">
        <pre>
          <ul className="list-group list-group-flush">
            {items}
          </ul>
          <NewListItem />
        </pre>
        </div>
      </div>
    </div>
  );
};

List.displayName = 'List';
List.propTypes = listPropTypes;
