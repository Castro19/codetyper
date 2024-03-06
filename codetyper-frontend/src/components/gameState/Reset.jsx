import React, { useEffect } from "react";
import { useTimer } from "../contexts/TimerContext";

const Reset = ({ setText, setInitialTime, initialTime }) => {
  const { setGameState, manageTimer, setTime, timerActive, time, gameState } =
    useTimer();

  // Check for the gameState and handles reset, if needed
  useEffect(() => {
    if (timerActive) {
      setGameState("active");
    } else if (time === 0 && !timerActive) {
      handleReset();
    }
  }, [timerActive, time, gameState, setGameState]);

  // Resets the state back to its original state
  const handleReset = () => {
    console.log("RESET!");
    setGameState("idle");
    manageTimer(false); // Ensure the timer is stopped
    setText(""); // Assuming you have a way to reset the user input text
    setInitialTime(initialTime); // Reset the time to the initial value
    setTime(initialTime);
  };

  return (
    <div>
      <button onClick={handleReset}>Start Over</button>
    </div>
  );
};

export default Reset;
