import React, { useState, useEffect, useContext, createContext } from "react";

// 1.) Create the Context:
const TimerContext = createContext();

// 2.) Create the Context Provider Component
export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(10);
  const [timerActive, setTimerActive] = useState(false);
  const [gameState, setGameState] = useState("idle");

  const manageTimer = (start) => {
    if (!timerActive && start) {
      // start timer if its not active and start is true
      setTimerActive(true);
      setGameState("active");
    } else if (timerActive && !start) {
      // Stop Timer if its active and start is false
      setTimerActive(false);
    }
  };

  useEffect(() => {
    if (!timerActive && gameState === "active") {
      setGameState("ended");
    }
  }, [timerActive, time, gameState, setGameState]);

  return (
    <TimerContext.Provider
      value={{
        time,
        setTime,
        gameState,
        setGameState,
        timerActive,
        manageTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

// 3.) Create our custom hook that will be our context consumer
//     component that will allow us access to the props specified
//     in the Provider component
export const useTimer = () => useContext(TimerContext);
