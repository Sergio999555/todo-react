import React from 'react';
import propTypes from 'prop-types';

import TaskFilter from '../TaskFilter/TaskFilter';

import '../Footer/Footer.css';

const Footer = ({ toDo, clearAllCompleted, onFilterItems, filter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <TaskFilter onFilterItems={onFilterItems} filter={filter} />
      <button className="clear-completed" onClick={clearAllCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;

Footer.defaultProps = {
  toDo: 0,
  onClearAllCompleted: () => {},
  filter: 'all',
};
Footer.propTypes = {
  toDo: propTypes.number,
  onClearAllCompleted: propTypes.func,
  onFilterItems: propTypes.func,
  filter: propTypes.string,
};
