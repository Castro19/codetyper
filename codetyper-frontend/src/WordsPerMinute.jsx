import React, { useState, useEffect } from "react";
import { useTimer } from "./TimerContext.jsx";

const WordsPerMinute = () => {
  const { text, time, timerActive } = useTimer();
  const [WPM, setWPM] = useState(0);
  let calculation;
  useEffect(() => {
    if (time === 0) {
      calculation = Math.ceil(text.length / 5 / (10 / 60));
      setWPM(calculation);
      console.log(calculation);
    }
  }, [time]);

  return (
    <div className="text-secondaryText">
      Words Per Minute:{" "}
      <span className="text-accentGreen font-bold">{WPM}</span>
    </div>
  );
};

export default WordsPerMinute;
