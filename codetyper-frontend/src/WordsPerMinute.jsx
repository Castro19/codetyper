import React, { useState } from "react";
// import { useTimer } from "./TimerContext.jsx";

const WordsPerMinute = () => {
  // const
  const [WPM, setWPM] = useState(0);
  return (
    <div>
      <h3>Words Per Minute: {WPM}</h3>
    </div>
  );
};

export default WordsPerMinute;
