import React, { useState, useEffect } from "react";
import { useTimer } from "./TimerContext.jsx";

const WordsPerMinute = () => {
  const { text, time, initialTime } = useTimer();
  const [WPM, setWPM] = useState(0);
  let calculation;
  useEffect(() => {
    if (time === 0) {
      // console.log(initialTime);
      calculation = Math.ceil(text.length / 5 / (initialTime / 60));
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
