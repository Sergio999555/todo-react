import React from 'react';
import propTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static defaultProps = {
    onAdded: () => {},
  };
  static propTypes = {
    onAdded: propTypes.func,
  };

  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          className="new-todo"
          onChange={this.onLabelChange}
          value={this.state.label}
          autoFocus
        />
      </form>
    );
  }
}
