import React, { useState } from 'react';
import propTypes from 'prop-types';

import '../NewTaskForm/NewTaskForm.css';

const NewTaskForm = ({ addItem }) => {
  const [label, setLabel] = useState('');

  const onLabelChange = (event) => setLabel(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    addItem(label);
    setLabel('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="new-todo"
        onChange={onLabelChange}
        value={label}
        autoFocus
      />
    </form>
  );
};

export default NewTaskForm;

NewTaskForm.defaultProps = {
  onAdded: () => {},
};

NewTaskForm.propTypes = {
  onAdded: propTypes.func,
};
