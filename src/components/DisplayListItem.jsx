import React from 'react';
import PropTypes from 'prop-types';

export const DisplayListItem = ({order, text, onEnableEditing}) => (
  <li className="list-group-item">
    <form className="form-inline" >
      <div onClick={onEnableEditing}>
        <div className="form-group">
          <label>{order}. </label>
          <label>{text}</label>
        </div>
      </div>
    </form>
  </li>
);

DisplayListItem.displayName = 'DisplayListItem';

DisplayListItem.propTypes = {
  order: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onEnableEditing: PropTypes.func.isRequired
};
