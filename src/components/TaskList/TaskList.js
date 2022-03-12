import React from 'react';
import propTypes from 'prop-types';

import Task from '../Task/Task';

const TaskList = ({ todos, onDeleted, onToggleCompleted, onToggleEditing, editItemValue }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Task
        {...itemProps}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleCompleted={() => onToggleCompleted(id)}
        onToggleEditing={() => onToggleEditing(id)}
        editItemValue={(text) => editItemValue(text, id)}
        id={id}
      />
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;

TaskList.defaultProps = {
  todos: [],
  onDeleted: () => {},
  onToggleCompleted: () => {},
};

TaskList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  onDeleted: propTypes.func,
  onToggleCompleted: propTypes.func,
};
