import React, { useState } from "react";
import TextArea from "./text/TextArea";
import TextThis from "./text/TextThis";
import CodeDisplay from "./code/CodeDisplay";
import CodeTextArea from "./code/CodeTextArea";

const ModeDisplay = ({ textToType, text, setText, editorRef, mode }) => {
  return (
    <div>
      <TextThis textToType={textToType} text={text} setText={setText} />
      {mode == "regular" ? <TextArea text={text} setText={setText} /> : null}

      {mode === "code" ? (
        <CodeTextArea text={text} setText={setText} editorRef={editorRef} />
      ) : null}
    </div>
  );
};

export default ModeDisplay;
