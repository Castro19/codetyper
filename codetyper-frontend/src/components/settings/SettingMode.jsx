import React from "react";

const SettingMode = ({ options, handleMode }) => {
  const handleModeSelect = (mode) => {
    // Display options in here with a sleek transiton
  };
  return (
    <div className="mode">
      {options.map((option) => (
        <button
          className="text-btn"
          key={option.id}
          onClick={() => handleMode(option.value)}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};

export default SettingMode;
