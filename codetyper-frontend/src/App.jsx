import React, { useEffect, useState } from "react";
import { TimeProvider } from "./components/contexts/TimerContext";
import TextArea from "./components/textArea/TextArea";
import DisplayInfo from "./components/display/DisplayInfo";
import TextThis from "./components/textToType/TextThis";
import { useHotkeys } from "react-hotkeys-hook";
import SettingsDisplay from "./components/settings/SettingsDisplay";
import Reset from "./components/gameState/Reset";
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
        <Reset
          setText={setText}
          setInitialTime={setInitialTime}
          initialTime={initialTime}
        />
      </div>
    </TimeProvider>
  );
}

export default App;
