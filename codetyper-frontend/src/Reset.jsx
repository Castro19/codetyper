import React, { useEffect } from "react";
import { useTimer } from "./TimerContext";

const Reset = ({ setText, setInitialTime, initialTime }) => {
  const { setGameState, manageTimer, setTime } = useTimer();
  const handleReset = () => {
    setText(""); // Assuming you have a way to reset the user input text
    setGameState("idle");
    setInitialTime(initialTime); // Reset the time to the initial value
    setTime(initialTime);

    manageTimer(false); // Ensure the timer is stopped
  };
  return (
    <div>
      <button onClick={handleReset}>Start Over</button>
    </div>
  );
};

export default Reset;
