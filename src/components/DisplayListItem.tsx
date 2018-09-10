import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';

export type DisplayListItemContainerProps = {
  readonly id: Guid,
  readonly order: number,
};

export type DisplayListItemDispatchProps = {
  readonly enableEditing: () => void,
};

export type DisplayListItemStateProps = {
  readonly text: string,
};

type DisplayListItemProps = DisplayListItemDispatchProps & DisplayListItemStateProps & DisplayListItemContainerProps;

const displayListItemPropTypes: ValidationMap<DisplayListItemProps> = {
  order: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  enableEditing: PropTypes.func.isRequired,
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
