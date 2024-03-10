import React, { useEffect } from "react";
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
    <div className="text-secondaryText text-lg lg:text-xl p-2">
      <span className="text-base lg:text-lg">Timer:</span>
      <span className="text-accentBlue font-bold text-2xl :text-3xl mx-2 p-1 rounded shadow">
        {time}
      </span>
    </div>
  );
};

export default Timer;
