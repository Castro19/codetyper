import React from "react";

const SettingMode = ({ options, handleMode, styleType }) => {
  // Define different style classes for different option types
  const baseStyle =
    "bg-gray-800-font-bold py-2 rounded-lg transition duration-300 ease-in-out m-1";

  const styleTypes = {
    settingOption: `text-accentBlue ${baseStyle}`,
    modeOption: `text-accentGreen ${baseStyle}`,
    // Add more styles as needed
  };
  const buttonStyle = styleTypes[styleType] || baseStyle;

  return (
    <div className="flex flex-row items-center justify-between">
      {options.map((option) => (
        <button
          className={`${buttonStyle} px-4 mx-2`} // Apply the determined style here
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
