import React, { useState, useEffect } from 'react';
import '../TaskTimer/TaskTimer.css';

const TaskTimer = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerSwitch, setTimerSwitch] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerSwitch) {
      interval = setInterval(() => {
        setCount((s) => s + 1);
      }, 1000);
      setTimer(interval);
    }
    clearInterval(timer);
  }, [timerSwitch]);

  const min = Math.floor(count / 60);
  const sec = Math.floor(count - min * 60);
  return (
    <div className="timer">
      <button onClick={stop ? () => setTimerSwitch(true) : null} className="icon-play"></button>
      <button onClick={() => setTimerSwitch(false)} className="icon-pause disabled = 'disabled'"></button>
      <span>{`${min}:${sec < 10 ? `0${sec}` : sec}`}</span>
    </div>
  );
};

export default TaskTimer;
