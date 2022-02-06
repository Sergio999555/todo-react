import React from "react";
import TaskFilter from "../TaskFilter/TaskFilter";
import "../Footer/Footer.css";

const Footer = ({ toDo, onFilterItems, filter, onClearAllCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{toDo} items left</span>
      <TaskFilter
        onFilterItems={onFilterItems}
        filter={filter}
        onClearAllCompleted={onClearAllCompleted}
      />
    </footer>
  );
};

export default Footer;
