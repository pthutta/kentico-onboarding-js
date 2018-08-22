import React from 'react';
import PropTypes from 'prop-types';
import { OrderedMap } from 'immutable';
import { TsComponent } from './TsComponent.tsx';
import { ListItem } from './ListItem';
import { NewListItem } from '../containers/NewListItem';

export const List = ({ items }) => (
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
            {items.valueSeq().map((item, i) => (
              <ListItem
                key={item.id}
                order={i + 1}
                item={item}
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
  items: PropTypes.instanceOf(OrderedMap)
};
