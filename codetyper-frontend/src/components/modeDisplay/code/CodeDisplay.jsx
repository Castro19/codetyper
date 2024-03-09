import React from "react";

const CodeDisplay = ({ text, textToType }) => {
  // Helper function to handle special characters like \n and \t
  const renderChar = (char, index, colorClass) => {
    // Handle newline
    if (char === "\n") {
      return <br key={index} />;
    }
    // Handle tab by converting it to spaces for simplicity, could adjust the number of spaces
    else if (char === "\t") {
      return (
        <span key={index} className={colorClass}>
          {"    "}
        </span>
      );
    }
    // Render regular character
    else {
      return (
        <span key={index} className={`${colorClass} mx-0.5 transition-colors`}>
          {char}
        </span>
      );
    }
  };

  return (
    <div className="bg-background text-primaryText p-4 rounded-lg shadow">
      <h2 className="font-mono text-lg whitespace-pre-wrap">
        {textToType.split("").map((char, index) => {
          let colorClass =
            text.length > index
              ? text.charAt(index) === char
                ? "text-correctTyping" // Use the text color utility prefix
                : "text-incorrectTyping" // Use the text color utility prefix
              : "text-untypedText"; // Use the text color utility prefix

          return renderChar(char, index, colorClass);
        })}
      </h2>
    </div>
  );
};

export default CodeDisplay;
