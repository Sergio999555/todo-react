import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Footer from './components/Footer';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTaskItem('Completed task'),
      this.createTaskItem('Editing task'),
      this.createTaskItem('Active task'),
    ]
  };

  createTaskItem(label) {
    return {
      label,
      completed: false,
      id: this.maxId++
    }
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {

      const index = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray
      };
    })
  };

  addItem = (text) => {
    const newItem = this.createTaskItem(text);
    this.setState(({ todoData }) => {
      const newArrAdd = [...todoData, newItem];
      return {
        todoData: newArrAdd
      }
    })
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[index];
      const newItem = {...oldItem, completed: !oldItem.completed};
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newArray = [...before, newItem, ...after];
      return {
        todoData: newArray
      }
    })
    
    console.log('Toogle completed', id)
  };

  render() {
    const { todoData } = this.state;
    const completedCount = todoData.filter((el) => el.completed).length;
    const todoCount = todoData.length - completedCount;

    return (
      <div>
        {/* <span>{ (new Date()).toString() }</span> */}
        <section className='todoapp'>
          <AppHeader />
          <section className='main'>
            <NewTaskForm onAdded = {this.addItem} />
            <TaskList 
              todos={ todoData } 
              onDeleted = { this.deleteItem }
              onToggleCompleted = { this.onToggleCompleted } />
            <Footer toDo = {todoCount} />
          </section>
        </section>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));