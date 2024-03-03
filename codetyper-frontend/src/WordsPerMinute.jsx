import React, { useState, useEffect } from "react";
import { useTimer } from "./TimerContext.jsx";

const WordsPerMinute = ({ text, initialTime }) => {
  const { time, setTimerActive } = useTimer();
  const [WPM, setWPM] = useState(0);
  useEffect(() => {
    if (!setTimerActive || time === 0) {
      // console.log(initialTime);
      // Calculate the elapsed time
      const elapsedTime = initialTime - time;
      const wordsTyped = text.length / 5;
      const minutesElapsed = elapsedTime / 60;
      const calculation =
        minutesElapsed > 0 ? Math.ceil(wordsTyped / minutesElapsed) : 0;
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
