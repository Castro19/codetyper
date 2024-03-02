import React, { useState, useEffect } from "react";
import { useTimer } from "./TimerContext";

const SettingsDisplay = ({ setTextToType, setInitialTime }) => {
  const { setTime, activeSettingDisplay } = useTimer();
  let data;
  const handleTimeChange = (newTime) => {
    setTime(newTime);
    setInitialTime(newTime);
  };

  if (!activeSettingDisplay) {
    return null; // The component will render nothing.
  }

  const handleDiffChange = (newDiff) => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/diffs`);

        if (!response) {
          throw new Error("Error Fetching from Diffs DB");
        }
        const data = await response.json();
        console.log(data[newDiff]);
        setTextToType(data[newDiff]);
        return data;
      } catch (error) {
        throw new Error("Problem with fetch: ", error);
      }
    };
    fetchData();
  };

  return (
    <div>
      SettingsDisplay
      <div class="mode">
        <div class="time">
          <button class="text-btn" onClick={() => handleTimeChange(15)}>
            15
          </button>
          <button class="text-btn" onClick={() => handleTimeChange(30)}>
            30
          </button>
          <button class="text-btn" onClick={() => handleTimeChange(60)}>
            60
          </button>
        </div>
        <div class="difficulty">
          <button className="text-btn" onClick={() => handleDiffChange("easy")}>
            Easy
          </button>
          <button
            className="text-btn"
            onClick={() => handleDiffChange("medium")}
          >
            Medium
          </button>
          <button className="text-btn" onClick={() => handleDiffChange("hard")}>
            Hard
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsDisplay;
