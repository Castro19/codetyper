import React, { useEffect } from "react";
import { useTimer } from "../contexts/TimerContext";

const Reset = ({ setText, setInitialTime, initialTime, editorRef }) => {
  const { setGameState, manageTimer, setTime, timerActive, time, gameState } =
    useTimer();

  // Check for the gameState and handles reset, if needed
  useEffect(() => {
    if (timerActive) {
      setGameState("active");
    } else if (time === 0 && !timerActive) {
      setGameState("ended");
      manageEditor("disable");
    }
  }, [timerActive, time, gameState, setGameState]);

  // Resets the state back to its original state
  const handleReset = () => {
    console.log("RESET!");
    setGameState("idle");
    manageTimer(false); // Ensure the timer is stopped
    setText(""); // Assuming you have a way to reset the user input text
    clearEditor();
    manageEditor("enable");
    setInitialTime(initialTime); // Reset the time to the initial value
    setTime(initialTime);
  };

  const clearEditor = () => {
    if (editorRef.current) {
      const model = editorRef.current.getModel();
      if (model) {
        model.setValue("");
      }
    }
  };

  const manageEditor = (editorState) => {
    if (editorRef.current) {
      if (editorState === "disable") {
        editorRef.current.updateOptions({ readOnly: true });
      } else {
        editorRef.current.updateOptions({ readOnly: false });
      }
    }
  };

  return (
    <div>
      <button onClick={handleReset}>Start Over</button>
    </div>
  );
};

export default Reset;
