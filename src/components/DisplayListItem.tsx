import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';

export interface IDisplayListItemDispatchProps {
  readonly enableEditing: () => void;
}

export interface IDisplayListItemFilteredProps {
  readonly order: number;
}

export interface IDisplayListItemStateProps {
  readonly text: string;
}

type DisplayListItemProps = IDisplayListItemDispatchProps & IDisplayListItemStateProps & IDisplayListItemFilteredProps;

const displayListItemPropTypes: ValidationMap<DisplayListItemProps> = {
  order: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  enableEditing: PropTypes.func.isRequired
};

export const DisplayListItem: React.StatelessComponent<DisplayListItemProps> = ({ order, text, enableEditing }): JSX.Element => (
  <li className="list-group-item">
    <form className="form-inline" >
      <div onClick={enableEditing}>
        <div className="form-group">
          {order}. {text}
        </div>
      </div>
    </form>
  </li>
);

DisplayListItem.displayName = 'DisplayListItem';
DisplayListItem.propTypes = displayListItemPropTypes;
