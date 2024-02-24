import React, { useState } from "react";
import WordsPerMinute from "./WordsPerMinute";
import Timer from "./Timer";
const DisplayInfo = () => {
  return (
    <div>
      <h1>DisplayInfo</h1>
      <WordsPerMinute />
      <Timer />
    </div>
  );
};

export default DisplayInfo;
