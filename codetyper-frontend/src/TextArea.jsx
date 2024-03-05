import React, { useEffect, useState } from "react";
import { useTimer } from "./TimerContext";
import Timer from "./Timer";

const TextArea = ({ text, setText }) => {
  const {
    time,
    manageTimer,
    timerActive,
    activeSettingDisplay,
    gameState,
    setGameState,
  } = useTimer();

  const handleTyping = (e) => {
    e.preventDefault();
    setText(e.target.value);
    if (gameState === "idle") {
      setGameState("active");
      if (!timerActive) {
        console.log("Manage Timer: True");
        console.log(`Display: ${activeSettingDisplay}`);
        manageTimer(true);
        // setActiveSettingDisplay(false);
      }
    }
  };
  // Start the timer, when timer becomes active:
  useEffect(() => {
    if (timerActive && gameState === "active") manageTimer(true);
  }, [timerActive]);

  return (
    <label>
      <h1>Type Here</h1>
      <textarea
        name="type"
        disabled={gameState === "ended"}
        rows={10}
        cols={100}
        value={text}
        onChange={handleTyping}
      />
    </label>
  );
};

export default TextArea;
