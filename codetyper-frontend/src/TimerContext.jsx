import React, { useState, useContext, createContext } from "react";

// 1.) Create the Context:
const TimerContext = createContext();

// 2.) Create the Context Provider Component
export const TimeProvider = ({ children }) => {
  const [time, setTime] = useState(10);
  const [initialTime, setInitialTime] = useState(10);
  const [textToType, setTextToType] = useState(
    "Hello I am testing my application. The quick brown fox jumps over the lazy dog."
  );
  const [timerActive, setTimerActive] = useState(false);
  const [text, setText] = useState("");
  const [activeSettingDisplay, setActiveSettingDisplay] = useState(true);

  const manageTimer = (start) => {
    if (!timerActive && start) {
      // start timer if its not active and start is true
      setTimerActive(true);
      setActiveSettingDisplay(false);
    } else if (timerActive && !start) {
      // Stop Timer if its active and start is false
      setTimerActive(false);
      setActiveSettingDisplay(true);
    }
  };

  const manageText = (newText) => {
    setText(newText);
  };

  return (
    <TimerContext.Provider
      value={{
        time,
        setTime,
        timerActive,
        manageTimer,
        text,
        textToType,
        setTextToType,
        manageText,
        initialTime,
        setInitialTime,
        activeSettingDisplay,
        setActiveSettingDisplay,
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
