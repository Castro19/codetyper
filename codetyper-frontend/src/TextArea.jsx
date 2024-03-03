import React, { useEffect, useState } from "react";
import { useTimer } from "./TimerContext";
import Timer from "./Timer";

const TextArea = ({ text, setText }) => {
  const { time, manageTimer, timerActive, activeSettingDisplay, disabled } =
    useTimer();

  const handleTyping = (e) => {
    e.preventDefault();
    setText(e.target.value);
    // console.log(e.target.value);
    if (!timerActive && e.target.value.length > 0) {
      console.log("Manage Timer: True");
      console.log(`Display: ${activeSettingDisplay}`);
      manageTimer(true);
      // setActiveSettingDisplay(false);
    }
  };

  useEffect(() => {
    if (timerActive && !disabled) manageTimer(true);
  }, [timerActive]);

  return (
    <label>
      <h1>Type Here</h1>
      <textarea
        name="type"
        disabled={disabled}
        rows={10}
        cols={100}
        value={text}
        onChange={handleTyping}
      />
    </label>
  );
};

export default TextArea;
