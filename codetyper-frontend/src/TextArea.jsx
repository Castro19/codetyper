import React, { useEffect, useState } from "react";
import { useTimer } from "./TimerContext";

const TextArea = ({ text, setText }) => {
  const { time, manageTimer, timerActive, activeSettingDisplay } = useTimer();
  const [disabled, setDisabled] = useState(false);

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
    if (time === 0) setDisabled(true);
  }, [time]);

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
