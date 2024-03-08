import React, { useEffect, useState } from "react";
import { useTimer } from "../../contexts/TimerContext";

const TextArea = ({ text, setText }) => {
  const { manageTimer, timerActive, gameState, setGameState } = useTimer();

  const handleTyping = (e) => {
    e.preventDefault();
    setText(e.target.value);
    if (gameState !== "active") {
      setGameState("active");
      if (!timerActive) {
        manageTimer(true);
      }
    }
  };

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
