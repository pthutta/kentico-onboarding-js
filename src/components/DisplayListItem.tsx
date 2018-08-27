import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ValidationMap } from 'prop-types';

export interface IDisplayListItemDispatchProps {
  readonly enableEditing: (text: string) => void;
}

export interface IDisplayListItemContainerProps {
  readonly id: string;
  readonly order: number;
}

export interface IDisplayListItemStateProps {
  readonly text: string;
}

type IDisplayListItemProps = IDisplayListItemDispatchProps & IDisplayListItemStateProps & IDisplayListItemContainerProps;

export const DisplayListItem: React.StatelessComponent<IDisplayListItemProps> = ({ order, text, enableEditing }): JSX.Element => (
  <li className="list-group-item">
    <form className="form-inline" >
      <div onClick={this.enableEditing}>
        <div className="form-group">
          <label>{this.props.order}. </label>
          <label>{this.props.text}</label>
        </div>
      </div>
    </form>
  </li>
);

DisplayListItem.displayName: string = 'DisplayListItem';

DisplayListItem.propTypes: ValidationMap<IDisplayListItemProps> = {
  order: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  enableEditing: PropTypes.func.isRequired
};
