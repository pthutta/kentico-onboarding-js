import React from 'react';
import PropTypes from 'prop-types';
import { EditListItem } from './EditListItem';
import { DisplayListItem } from './DisplayListItem';

export const ListItem = ({
  id, text, isBeingEdited, order, onSave, onDelete
}) => {
  return (
    <li className="list-group-item">
      <form className="form-inline">
        <div>
          <label>{order}. </label>
          {isBeingEdited ? (
            <EditListItem id={id} text={text} onSave={onSave} onDelete={onDelete}/>
          ) : <DisplayListItem id={id} text={text} onSave={onSave} />}
        </div>
      </form>
    </li>
  );
};

ListItem.displayName = 'List Item';

ListItem.propTypes = {
  order: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isBeingEdited: PropTypes.bool.isRequired
};
