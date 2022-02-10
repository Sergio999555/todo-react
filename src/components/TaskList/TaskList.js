import React from 'react';
import propTypes from 'prop-types';

import Task from '../Task/Task';
import '../TaskList/TaskList.css';

export default class TaskList extends React.Component {
  static defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleCompleted: () => {},
  };

  static propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onDeleted: propTypes.func,
    onToggleCompleted: propTypes.func,
  };

  render() {
    const { todos, onDeleted, onToggleCompleted } = this.props;
    const elements = todos.map((item) => {
      return (
        <Task
          {...item}
          key={item.id}
          onDeleted={() => onDeleted(item.id)}
          onToggleCompleted={() => onToggleCompleted(item.id)}
        />
      );
    });

    return <ul className="todo-list">{elements}</ul>;
  }
}
