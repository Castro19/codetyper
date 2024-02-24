import React, { useState, useEffect } from "react";
import { useTimer } from "./TimerContext";

const Timer = () => {
  const { time, setTime, timerActive, manageTimer, text, manageText } =
    useTimer();

  useEffect(() => {
    let intervalId;
    if (timerActive) {
      intervalId = setInterval(() => {
        setTime((currTime) => {
          if (currTime > 0) {
            return currTime - 1;
          } else {
            manageTimer(false);
            manageText("");
            setTime(10);
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    // Clean Up:
    return () => {
      clearInterval(intervalId);
    };
  }, [timerActive]);
  return (
    <div>
      <h3>Timer: {time}</h3>
    </div>
  );
};

export default Timer;
