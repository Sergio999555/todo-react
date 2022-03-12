import React, { useState } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import TaskList from '../TaskList/TaskList';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';

import '../App/App.css';

const App = () => {
  const [state, setState] = useState({
    todoData: [],
    filter: 'all',
  });

  const createTaskItem = (label) => {
    return {
      label,
      completed: false,
      editing: false,
      id: state.todoData.length,
      date: new Date(),
    };
  };

  const addItem = (text) => {
    const newItem = createTaskItem(text);
    const newArr = [...state.todoData, newItem];
    setState((state) => ({
      ...state,
      todoData: newArr,
    }));
  };

  const deleteItem = (id) => {
    const index = state.todoData.findIndex((el) => el.id === id);
    const before = state.todoData.slice(0, index);
    const after = state.todoData.slice(index + 1);
    const newArr = [...before, ...after];
    setState((state) => ({
      ...state,
      todoData: newArr,
    }));
  };

  const onToggleCompleted = (id) => {
    setState((state) => {
      const index = state.todoData.findIndex((el) => el.id === id);
      const oldItem = state.todoData[index];
      const newItem = { ...oldItem, completed: !oldItem.completed };
      const newArr = [...state.todoData.slice(0, index), newItem, ...state.todoData.slice(index + 1)];
      return {
        ...state,
        todoData: newArr,
      };
    });
  };

  const onToggleEditing = (id) => {
    setState((state) => {
      const index = state.todoData.findIndex((el) => el.id === id);
      const oldItem = state.todoData[index];
      const newItem = { ...oldItem, editing: !oldItem.editing };
      const newArr = [...state.todoData.slice(0, index), newItem, ...state.todoData.slice(index + 1)];
      return {
        ...state,
        todoData: newArr,
      };
    });
  };

  const editItemValue = (text, id) => {
    setState((state) => {
      const index = state.todoData.findIndex((el) => el.id === id);
      const oldItem = state.todoData[index];
      const newItem = { ...oldItem, label: text };
      const newArr = [...state.todoData.slice(0, index), newItem, ...state.todoData.slice(index + 1)];
      return {
        ...state,
        todoData: newArr,
      };
    });
  };

  const filterItems = (todoData, filter) => {
    if (filter === 'all') return todoData;
    if (filter === 'active') return todoData.filter((el) => !el.completed);
    if (filter === 'completed') return todoData.filter((el) => el.completed);
  };

  const onFilterItems = (filter) => {
    setState((state) => ({
      ...state,
      filter,
    }));
  };

  const clearAllCompleted = () => {
    setState((state) => {
      const newArr = state.todoData.filter((el) => !el.completed);
      return {
        ...state,
        todoData: newArr,
      };
    });
  };

  const { todoData, filter } = state;
  const completedCount = state.todoData.filter((el) => el.completed).length;
  const todoCount = todoData.length - completedCount;
  const visibleItems = filterItems(todoData, filter);

  return (
    <section className="todoapp">
      <AppHeader />
      <section className="main">
        <NewTaskForm addItem={addItem} />
        <TaskList
          todos={visibleItems}
          onDeleted={deleteItem}
          onToggleCompleted={onToggleCompleted}
          onToggleEditing={onToggleEditing}
          editItemValue={editItemValue}
        />
        <Footer toDo={todoCount} clearAllCompleted={clearAllCompleted} onFilterItems={onFilterItems} filter={filter} />
      </section>
    </section>
  );
};

export default App;
