import React, { useEffect, useState } from "react";
import { useTimer } from "./TimerContext";

const TextArea = () => {
  const { time, manageTimer, text, manageText, timerActive } = useTimer();

  const handleTyping = (e) => {
    e.preventDefault();
    manageText(e.target.value);
    // console.log(e.target.value);
    if (!timerActive && e.target.value.length > 0) {
      console.log("Manage Timer: True");
      manageTimer(true);
    }
  };

  return (
    <label>
      <h1>Type Here</h1>
      <textarea
        name="type"
        rows={10}
        cols={100}
        value={text}
        onChange={handleTyping}
      />
    </label>
  );
};

export default TextArea;
