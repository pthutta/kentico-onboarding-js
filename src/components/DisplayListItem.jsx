import React from 'react';
import PropTypes from 'prop-types';

export const DisplayListItem = ({ item, onEnableEditing }) => (
  <div className="form-group" onClick={onEnableEditing}>
    <label>{item.text}</label>
  </div>
);

DisplayListItem.displayName = 'DisplayListItem';

DisplayListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onEnableEditing: PropTypes.func.isRequired,
};
