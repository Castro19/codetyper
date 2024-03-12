import React from "react";
import WordsPerMinute from "./WordsPerMinute";
import Timer from "./Timer";
const DisplayInfo = ({ text, initialTime, textToType }) => {
  return (
    <div className="text-center">
      <div className="mt-4 md:mt-6 bg-gray-1000 p-6 rounded-lg shadow-xl border-gray-400 flex justify-center items-center space-x-4">
        <WordsPerMinute
          text={text}
          initialTime={initialTime}
          textToType={textToType}
        />
        <Timer initialTime={initialTime} />
      </div>
    </div>
  );
};

export default DisplayInfo;
