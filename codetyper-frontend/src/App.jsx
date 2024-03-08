import React, { useRef, useState } from "react";
import { TimeProvider } from "./components/contexts/TimerContext";
import SettingsDisplay from "./components/settings/SettingsDisplay";
import DisplayInfo from "./components/display/DisplayInfo";
import ModeDisplay from "./components/modeDisplay/ModeDisplay";
import Reset from "./components/gameState/Reset";
import { useHotkeys } from "react-hotkeys-hook";
import "./App.css";

function App() {
  const [textToType, setTextToType] = useState(
    "Hello I am testing my application. The quick brown fox jumps over the lazy dog."
  );
  const [text, setText] = useState("");
  const [initialTime, setInitialTime] = useState(10);
  const [mode, setMode] = useState("regular");

  // Create a ref to store the editor instance
  const editorRef = useRef(null);

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
          setMode={setMode}
        />
        <DisplayInfo text={text} initialTime={initialTime} />
        <ModeDisplay
          textToType={textToType}
          text={text}
          mode={mode}
          setText={setText}
          editorRef={editorRef}
        />
        <Reset
          setText={setText}
          editorRef={editorRef}
          setInitialTime={setInitialTime}
          initialTime={initialTime}
        />
      </div>
    </TimeProvider>
  );
}

export default App;
