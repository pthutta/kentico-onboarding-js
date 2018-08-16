import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validateString } from '../utils/UtilFunctions';

export const NewListItem = ({ newItem, handleItemChange, addItem }) => {
  const isValid = validateString(newItem);

  return (
    <form className="form-inline">
      <div className={classNames('form-group', { 'has-success': isValid }, { 'has-error': !isValid })}>
        <input
          type="text"
          className="form-control"
          value={newItem}
          placeholder="New item"
          onChange={handleItemChange}
        />
        <button
          type="button"
          className="btn btn-default"
          onClick={addItem}
          disabled={!isValid}
          title={isValid ? '' : 'Please enter text'}
        >Add
        </button>
      </div>
    </form>
  );
};

NewListItem.displayName = 'New List Item';
NewListItem.propTypes = {
  newItem: PropTypes.string.isRequired,
  handleItemChange: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired
};
