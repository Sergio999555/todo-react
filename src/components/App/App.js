import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';
import '../App/App.css';

export default class App extends React.Component {
  maxId = 1;
  state = {
    todoData: [this.createTaskItem('Задача №1'), this.createTaskItem('Задача №2'), this.createTaskItem('Задача №3')],
    filter: 'all',
  };

  createTaskItem(label) {
    return {
      label,
      completed: false,
      id: this.maxId++,
    };
  }

  addItem = (text) => {
    const newItem = this.createTaskItem(text);
    this.setState(({ todoData }) => {
      const newArrAdd = [...todoData, newItem];
      return {
        todoData: newArrAdd,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray,
      };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[index];
      const newItem = { ...oldItem, completed: !oldItem.completed };
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newArray = [...before, newItem, ...after];
      return {
        todoData: newArray,
      };
    });
  };

  filterItems = (filter) => {
    this.setState({ filter });
  };

  filterTasks(todoData, filter) {
    if (filter === 'all') return todoData;
    if (filter === 'active') return todoData.filter((el) => !el.completed);
    if (filter === 'completed') return todoData.filter((el) => el.completed);
  }

  clearAllCompleted = () => {
    this.setState(({ todoData }) => {
      const newArr = todoData.filter((el) => !el.completed);
      return {
        todoData: newArr,
      };
    });
  };

  render() {
    const { todoData, filter } = this.state;
    const completedCount = todoData.filter((el) => el.completed).length;
    const todoCount = todoData.length - completedCount;
    const visibleItems = this.filterTasks(todoData, filter);

    return (
      <section className="todoapp">
        <AppHeader />
        <section className="main">
          <NewTaskForm onAdded={this.addItem} />
          <TaskList todos={visibleItems} onDeleted={this.deleteItem} onToggleCompleted={this.onToggleCompleted} />
          <Footer
            toDo={todoCount}
            onFilterItems={this.filterItems}
            filter={filter}
            onClearAllCompleted={this.clearAllCompleted}
          />
        </section>
      </section>
    );
  }
}
