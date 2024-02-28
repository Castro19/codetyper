import React, { useState } from "react";
import { TimeProvider } from "./TimerContext";
import TextArea from "./TextArea";
import DisplayInfo from "./DisplayInfo";
import TextThis from "./TextThis";
import { useHotkeys } from "react-hotkeys-hook";
import SettingsDisplay from "./SettingsDisplay";
import "./App.css";

function App() {
  useHotkeys("tab+enter", (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Restarting...");
    setDisabled(false);
  });

  return (
    <TimeProvider>
      <div className="flex flex-col space-y-8 p-8">
        <SettingsDisplay />
        <DisplayInfo />
        <TextThis />
        <TextArea />
      </div>
    </TimeProvider>
  );
}

export default App;
