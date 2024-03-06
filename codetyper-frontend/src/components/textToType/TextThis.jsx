import React, { useEffect } from "react";
import { useTimer } from "../contexts/TimerContext";

const TextThis = ({ textToType, text, setText }) => {
  const { manageTimer } = useTimer();

  // Effect to stop timer, if the user has typed
  // all of the text accurately
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
