import React, { useState } from "react";
import { TimeProvider } from "./TimerContext";
import TextArea from "./TextArea";
import DisplayInfo from "./DisplayInfo";
import "./App.css";

function App() {
  return (
    <TimeProvider>
      <DisplayInfo />
      <TextArea />
    </TimeProvider>
  );
}

export default App;
