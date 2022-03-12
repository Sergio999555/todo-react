import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import propTypes from 'prop-types';

import TaskTimer from '../TaskTimer/TaskTimer';

import '../Task/Task.css';

const Task = ({
  label,
  onDeleted,
  onToggleCompleted,
  completed,
  date,
  onToggleEditing,
  editItemValue,
  editing,
  id,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    onToggleEditing(id);
  };

  let classNamesEdit = 'edit';
  let classNamesDiv = 'view';
  let classNames = 'active';
  if (completed) classNames = 'completed';
  if (editing) {
    classNamesEdit = 'view';
    classNamesDiv = 'edit';
  }

  return (
    <li className={classNames}>
      <div className={classNamesDiv}>
        <input className="toggle" type="checkbox" onClick={onToggleCompleted} id={id} />
        <label htmlFor={id}>
          <span className="title">{label}</span>
          <TaskTimer />
          <span className="created">
            {formatDistanceToNow(date, {
              locale: ruLocale,
              includeSeconds: true,
            })}
          </span>
        </label>
        <button className="icon icon-edit" title="edit" onClick={onToggleEditing} />
        <button className="icon icon-destroy" title="delete" onClick={onDeleted} />
      </div>
      <form className={classNamesEdit} onSubmit={onSubmit}>
        <label className="label">
          <input
            type="text"
            // className={classNamesEdit}
            onChange={(e) => editItemValue(e.target.value, id)}
            value={label}
          />
        </label>
      </form>
    </li>
  );
};

export default Task;

Task.defaultProps = {
  label: '',
  onDeleted: () => {},
  onToggleCompleted: () => {},
  completed: false,
};

Task.propTypes = {
  label: propTypes.string,
  onDeleted: propTypes.func,
  onToggleCompleted: propTypes.func,
  completed: propTypes.bool,
};
