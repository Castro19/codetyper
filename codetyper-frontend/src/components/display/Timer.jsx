import React, { useState, useEffect } from "react";
import { useTimer } from "../contexts/TimerContext";

const Timer = () => {
  const { time, setTime, timerActive, manageTimer, gameState } = useTimer();

  // Effect for the interval of the countdown timer
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

  // Start the timer, when timer becomes active:
  useEffect(() => {
    if (timerActive && gameState === "active") manageTimer(true);
  }, [timerActive, gameState]);

  return (
    <div className="text-secondaryText">
      Timer: <span className="text-accentBlue font-bold">{time}</span>
    </div>
  );
};

export default Timer;
