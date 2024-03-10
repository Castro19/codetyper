import React, { useState, useEffect } from "react";
import { useTimer } from "../contexts/TimerContext";

const WordsPerMinute = ({ text, initialTime }) => {
  const { time, setTimerActive } = useTimer();
  const [WPM, setWPM] = useState(0);

  useEffect(() => {
    if (!setTimerActive) {
      // Conidition to not reset WPM, after the game has been reset
      if (time === initialTime) {
        return;
      }
      // Calculate the elapsed time
      const elapsedTime = initialTime - time;
      const wordsTyped = text.length / 5;
      const minutesElapsed = elapsedTime / 60;
      const calculation =
        minutesElapsed > 0 ? Math.ceil(wordsTyped / minutesElapsed) : 0;
      setWPM(calculation);
    }
  }, [time]);

  return (
    <div className="text-secondaryText text-lg lg:text-xl p-2">
      <span className="text-base lg:text-lg">Words Per Minute:</span>
      <span className="text-accentGreen font-bold text-1xl lg:text-2xl mx-2 p-1 rounded shadow">
        {WPM}
      </span>
    </div>
  );
};

export default WordsPerMinute;
