import React from 'react';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'completed', label: 'Completed' },
];

const TaskFilter = (props) => {
  const { filter, onFilterItems, onClearAllCompleted } = props;
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames = isActive ? 'selected' : '';
    return (
      <li key={name}>
        <button className={classNames} onClick={() => onFilterItems(name)}>
          {label}
        </button>
      </li>
    );
  });

  return (
    <div className="footer">
      <ul className="filters">{buttons}</ul>
      <button className="clear-completed" onClick={onClearAllCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default TaskFilter;
