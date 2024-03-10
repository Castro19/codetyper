import React, { useState } from "react";
import { useTimer } from "../contexts/TimerContext";
import SettingMode from "./SettingMode";

const SettingsDisplay = ({ setTextToType, setInitialTime, setMode }) => {
  const { setTime, gameState } = useTimer();
  const [settingMode, setSettingMode] = useState("time");

  const settingOptions = [
    { id: 1, value: "mode" },
    { id: 2, value: "time" },
    { id: 3, value: "diff" },
  ];
  const handleSettingModeChange = (mode) => {
    setSettingMode(mode);
  };
  // Derive the visibility class based on the selected mode
  const optionsContainerClasses = settingMode
    ? "transition-opacity duration-500 ease-in opacity-100"
    : "transition-opacity duration-500 ease-out opacity-0";

  // Check if we should hide the display (gameState is 'active')
  if (gameState === "active") {
    return null; // The component will render nothing.
  }
  const modeOptions = [
    { id: 1, value: "regular" },
    { id: 2, value: "code" },
  ];

  const timeOptions = [
    { id: 1, value: 15 },
    { id: 2, value: 30 },
    { id: 3, value: 60 },
  ];

  const diffOptions = [
    { id: 1, value: "easy" },
    { id: 2, value: "medium" },
    { id: 3, value: "hard" },
  ];

  const handleModeChange = (newMode) => {
    console.log(newMode);
    setMode(newMode);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
    setInitialTime(newTime);
  };

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  const handleDiffChange = (newDiff) => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/diffs`);

        if (!response) {
          throw new Error("Error Fetching from Diffs DB");
        }
        const data = await response.json();
        let word_data = data[newDiff];
        console.log(word_data);
        shuffle(word_data);
        let shuffled_text = word_data.slice(0, 25).join(" ");
        setTextToType(shuffled_text);
      } catch (error) {
        throw new Error("Problem with fetch: ", error);
      }
    };
    fetchData();
  };

  return (
    <div className="flex justify-center items-center p-4">
      <div className="settings-display flex flex-row w-full max-w-4xl mx-auto bg-gray-1000 p-4 rounded-lg border shadow-xl border-gray-400">
        <div className="flex-1 flex flex-row justify-around items-center">
          <SettingMode
            options={settingOptions}
            handleMode={handleSettingModeChange}
            styleType="settingOption"
          />
        </div>
        <div className="flex-1 flex flex-row justify-around items-center">
          {settingMode === "time" && (
            <SettingMode
              options={timeOptions}
              handleMode={handleTimeChange}
              styleType="modeOption"
            />
          )}
          {settingMode === "diff" && (
            <SettingMode
              options={diffOptions}
              handleMode={handleDiffChange}
              styleType="modeOption"
            />
          )}
          {settingMode === "mode" && (
            <SettingMode
              options={modeOptions}
              handleMode={handleModeChange}
              styleType="modeOption"
            />
          )}
          {/* ... other settings if any */}
        </div>
      </div>
    </div>
  );
};

export default SettingsDisplay;
