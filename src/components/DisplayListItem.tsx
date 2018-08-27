import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';

export interface IDisplayListItemDispatchProps {
  readonly enableEditing: () => void;
}

export interface IDisplayListItemContainerProps {
  readonly id: string;
  readonly order: number;
}

export interface IDisplayListItemStateProps {
  readonly text: string;
}

type IDisplayListItemProps = IDisplayListItemDispatchProps & IDisplayListItemStateProps & IDisplayListItemContainerProps;

const displayListItemPropTypes: ValidationMap<IDisplayListItemProps> = {
  order: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  enableEditing: PropTypes.func.isRequired
};

export const DisplayListItem: React.StatelessComponent<IDisplayListItemProps> = ({ order, text, enableEditing }): JSX.Element => (
  <li className="list-group-item">
    <form className="form-inline" >
      <div onClick={enableEditing}>
        <div className="form-group">
          <label>{order}. </label>
          <label>{text}</label>
        </div>
      </div>
    </form>
  </li>
);

DisplayListItem.displayName = 'DisplayListItem';

DisplayListItem.propTypes = displayListItemPropTypes;
