import React from "react";
// import formatDistanceToNow from "date-fns/formatDistanceToNow";
// import ruLocale from "date-fns/locale/ru";
import "../Task/Task.css";

export default class Task extends React.Component {
  state = {
    completed: false,
    editing: false,
    label: "",
  };

  editTask = () => {
    this.setState(({ editing }) => {
      return {
        editing: !editing,
      };
    });
  };

  render() {
    const { label, onDeleted, onToggleCompleted, completed } = this.props;
    const { editing } = this.state;
    let classNames = "";

    if (completed) classNames += "completed";
    if (editing) classNames += "editing";

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={onToggleCompleted}
          />
          <label>
            <span className="description">{label}</span>
            {/* <span className="created">
              {formatDistanceToNow(new Date(), {
                locale: ruLocale,
                addSuffix: true,
                includeSeconds: true,
              })}
            </span> */}
          </label>
          <button className="icon icon-edit" onClick={this.editTask}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <div>
          <input
            type="text"
            className="edit"
            onChange={this.onLabelChange}
            autoFocus
          />
        </div>
      </li>
    );
  }
}
