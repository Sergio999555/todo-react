import React from 'react';
import Task from './Task';
import propTypes from 'prop-types';

export default class TaskList extends React.Component {

  static defaultProps = {
    onToggleCompleted: () => {}
  }

  static propTypes = {
    onToggleCompleted: propTypes.func,
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    
  }

  render() {
    const { todos, onDeleted, onToggleCompleted } = this.props;

    const elements = todos.map((item) => {
      const { id, ...itemProps} = item;
      return (
          <Task 
            { ...itemProps }
            key = { id }
            onDeleted = { () => onDeleted(id)}
            onToggleCompleted = { () => onToggleCompleted(id) } />
      )
    })

    return (
      <ul className='todo-list'>
        { elements }
      </ul>
    )
  }
};
