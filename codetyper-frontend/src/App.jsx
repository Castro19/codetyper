import React, { useState } from "react";
import { TimeProvider } from "./TimerContext";
import TextArea from "./TextArea";
import DisplayInfo from "./DisplayInfo";
import TextThis from "./TextThis";
import { useHotkeys } from "react-hotkeys-hook";
import SettingsDisplay from "./SettingsDisplay";
import "./App.css";

function App() {
  const [textToType, setTextToType] = useState(
    "Hello I am testing my application. The quick brown fox jumps over the lazy dog."
  );
  const [text, setText] = useState("");
  const [initialTime, setInitialTime] = useState(10);

  useHotkeys("tab+enter", (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Restarting...");
    setDisabled(false);
  });

  return (
    <TimeProvider>
      <div className="flex flex-col space-y-8 p-8">
        <SettingsDisplay
          setTextToType={setTextToType}
          setInitialTime={setInitialTime}
        />
        <DisplayInfo text={text} initialTime={initialTime} />
        <TextThis textToType={textToType} text={text} setText={setText} />
        <TextArea text={text} setText={setText} />
      </div>
    </TimeProvider>
  );
}

export default App;
