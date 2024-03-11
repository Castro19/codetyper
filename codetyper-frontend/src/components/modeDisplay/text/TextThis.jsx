import React, { useEffect } from "react";
import { useTimer } from "../../contexts/TimerContext";

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
          // Update the base class to remove the mx-0.5 and apply it conditionally later
          let baseClass = "transition-colors";
          let colorClass;

          if (text.length > index) {
            if (text.charAt(index) === char) {
              colorClass = "text-correctTyping"; // Correct typing
            } else {
              colorClass =
                char === " " ? "bg-incorrectSpace" : "text-incorrectTyping"; // Special case for spaces
            }
          } else {
            colorClass = "text-untypedText";
          }

          // Apply a special styling for spaces to make them visible when incorrectly typed
          let style = {};
          if (char === " ") {
            // Adjust style for spaces to ensure visibility
            style.borderBottom =
              colorClass === "bg-incorrectSpace" ? "2px solid red" : "none";
            style.padding = "0 2px"; // This helps to make the space visible without affecting letter spacing
            baseClass += " mx-0.5"; // Apply horizontal margin only to spaces
          }

          return (
            <span
              key={index}
              className={`${colorClass} ${baseClass}`}
              style={style}
            >
              {char === " " && colorClass === "bg-incorrectSpace"
                ? "\u00A0"
                : char}
            </span>
          );
        })}
      </h2>
    </div>
  );
};

export default TextThis;
