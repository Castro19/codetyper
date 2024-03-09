import React, { useEffect } from "react";
import TextArea from "./text/TextArea";
import TextDisplay from "./text/TextDisplay";
import CodeDisplay from "./code/CodeDisplay";
import CodeTextArea from "./code/CodeTextArea";
import "./ModeDisplay.css";
const ModeDisplay = ({ textToType, text, setText, editorRef, mode }) => {
  const isCodeMode = mode === "code";
  const isRegularMode = mode === "regular";

  return (
    <div>
      {isRegularMode && (
        <>
          <TextDisplay textToType={textToType} text={text} setText={setText} />
          <TextArea text={text} setText={setText} />
        </>
      )}

      {isCodeMode && (
        <div className="codeContainer">
          <CodeDisplay textToType={textToType} text={text} setText={setText} />
          <CodeTextArea text={text} setText={setText} editorRef={editorRef} />
        </div>
      )}
    </div>
  );
};

export default ModeDisplay;
