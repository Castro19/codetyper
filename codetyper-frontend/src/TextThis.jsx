import React, { useState, useEffect } from "react";
import { useTimer } from "./TimerContext";

const TextThis = ({ textToType, text, setText, initialTime }) => {
  const { time, setTime, timerActive, manageTimer } = useTimer();

  useEffect(() => {
    if (time === 0 && !timerActive) {
      setText(""); // Clear the text
      setTime(10); // Reset the time after it reaches 0
    }
  }, [timerActive]);

  useEffect(() => {
    if (text === textToType) {
      manageTimer(false);
    }
  }, [text]);

  return (
    <div className="bg-background text-primaryText p-4 rounded-lg shadow">
      <h2 className="font-mono text-lg">
        {textToType.split("").map((char, index) => {
          let colorClass =
            text.length > index
              ? text.charAt(index) === char
                ? "text-correctTyping" // Use the text color utility prefix
                : "text-incorrectTyping" // Use the text color utility prefix
              : "text-untypedText"; // Use the text color utility prefix

          return (
            <span
              key={index}
              className={`${colorClass} mx-0.5 transition-colors`}
            >
              {char}
            </span>
          );
        })}
      </h2>
    </div>
  );
};

export default TextThis;
