import React from 'react';
import '../TaskTimer/TaskTimer.css';

export default class TaskTimer extends React.Component {
  state = {
    count: 0,
    stop: true,
  };

  startTimer = () => {
    this.setState({
      stop: false,
    });

    const timer = setInterval(() => {
      const { count } = this.state;
      this.setState({
        count: count + 1,
      });
      if (this.state.stop) clearInterval(timer);
    }, 1000);
  };

  stopTimer = () => {
    this.setState({
      stop: true,
    });
  };

  render() {
    const { count, stop } = this.state;
    const { startTimer, stopTimer } = this;
    const min = Math.floor(count / 60);
    const sec = Math.floor(count - min * 60);
    return (
      <div className="timer">
        <button onClick={stop ? startTimer : null} className="icon-play"></button>
        <button onClick={stopTimer} className="icon-pause disabled = 'disabled'"></button>
        <span>{`${min}:${sec < 10 ? `0${sec}` : sec}`}</span>
      </div>
    );
  }
}
