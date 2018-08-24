import React from 'react';
import PropTypes from 'prop-types';
import { Seq } from 'immutable';
import { TsComponent } from './TsComponent.tsx';
import { ListItem } from '../containers/ListItem';
import { NewListItem } from '../containers/NewListItem.tsx';

export const List = ({ itemIds }) => (
  <div className="row">
    <div className="row">
      <div className="col-sm-12 text-center">
        <TsComponent name="𝕱𝖆𝖓𝖈𝖞" invisible />
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12 col-md-offset-2 col-md-8">
        <pre>
          <ul className="list-group list-group-flush">
            {itemIds.map((itemId, i) => (
              <ListItem
                key={itemId}
                order={i + 1}
                id={itemId}
              />
            ))}
          </ul>
          <NewListItem />
        </pre>
      </div>
    </div>
  </div>
);

List.displayName = 'List';

List.propTypes = {
  itemIds: PropTypes.instanceOf(Seq).isRequired
};
