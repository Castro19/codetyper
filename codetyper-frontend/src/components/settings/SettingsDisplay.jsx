import React from "react";
import { useTimer } from "../contexts/TimerContext";
import SettingMode from "./SettingMode";
const SettingsDisplay = ({ setTextToType, setInitialTime, setMode }) => {
  const { setTime, gameState } = useTimer();

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

  const difficultyOptions = [
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
    <div>
      SettingsDisplay
      <div className="mode">
        <SettingMode options={modeOptions} handleMode={handleModeChange} />
        <SettingMode options={timeOptions} handleMode={handleTimeChange} />
        <SettingMode
          options={difficultyOptions}
          handleMode={handleDiffChange}
        />
      </div>
    </div>
  );
};

export default SettingsDisplay;
