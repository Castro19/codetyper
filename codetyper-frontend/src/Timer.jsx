import React, { useState, useEffect } from "react";
import { useTimer } from "./TimerContext";

const Timer = () => {
  const { time, setTime, timerActive, manageTimer } = useTimer();

  useEffect(() => {
    let intervalId;
    if (timerActive) {
      intervalId = setInterval(() => {
        setTime((currTime) => {
          if (currTime > 0) {
            return currTime - 1;
          } else {
            manageTimer(false);
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
    <div className="text-secondaryText">
      Timer: <span className="text-accentBlue font-bold">{time}</span>
    </div>
  );
};

export default Timer;
