import React, { useState } from "react";
import WordsPerMinute from "./WordsPerMinute";
import Timer from "./Timer";
const DisplayInfo = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-4 md:mt-8 lg:text-5xl">
        Display Info
      </h1>
      <div className="mt-4 md:mt-6">
        <WordsPerMinute />
        <Timer />
      </div>
    </div>
  );
};

export default DisplayInfo;
