import React from 'react';
import propTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import '../Task/Task.css';

export default class Task extends React.Component {
  static defaultProps = {
    label: '',
    onDeleted: () => {},
    onToggleCompleted: () => {},
    completed: false,
  };
  static propTypes = {
    label: propTypes.string,
    onDeleted: propTypes.func,
    onToggleCompleted: propTypes.func,
    completed: propTypes.bool,
  };

  state = {
    completed: false,
    editing: false,
    label: '',
  };

  render() {
    const { label, onDeleted, onToggleCompleted, completed } = this.props;
    const { editing } = this.state;
    let classNames = '';

    if (completed) classNames += 'completed';
    if (editing) classNames += 'editing';

    return (
      <li className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
          <label>
            <span className="description">{label}</span>
            <span className="created">
              {formatDistanceToNow(new Date(), {
                locale: ruLocale,
                addSuffix: true,
                includeSeconds: true,
              })}
            </span>
          </label>
          <button className="icon icon-edit" onClick={this.editTask}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <div>
          <input type="text" className="edit" />
        </div>
      </li>
    );
  }
}
