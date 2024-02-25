import React, { useState } from "react";
import { TimeProvider } from "./TimerContext";
import TextArea from "./TextArea";
import DisplayInfo from "./DisplayInfo";
import TextThis from "./TextThis";
import "./App.css";

function App() {
  return (
    <TimeProvider>
      <div className="flex flex-col space-y-8 p-8">
        <DisplayInfo />
        <TextThis />
        <TextArea />
      </div>
    </TimeProvider>
  );
}

export default App;
