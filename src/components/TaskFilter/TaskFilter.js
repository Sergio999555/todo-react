import React from 'react';
import propTypes from 'prop-types';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'completed', label: 'Completed' },
];

export default class TaskFilter extends React.Component {
  static defaultProps = {
    filter: 'all',
    onFilterItems: () => {},
  };
  static propTypes = {
    filter: propTypes.string,
    onFilterItems: propTypes.func,
  };

  render() {
    const { filter, onFilterItems, onClearAllCompleted } = this.props;
    const buttons = filterButtons.map(({ name, label }) => {
      const isActive = name === filter;
      const classNames = isActive ? 'selected' : '';
      return (
        <li key={name}>
          <button className={classNames} onClick={() => onFilterItems(name)}>
            {label}
          </button>
        </li>
      );
    });

    return (
      <div className="footer">
        <ul className="filters">{buttons}</ul>
        <button className="clear-completed" onClick={onClearAllCompleted}>
          Clear completed
        </button>
      </div>
    );
  }
}
