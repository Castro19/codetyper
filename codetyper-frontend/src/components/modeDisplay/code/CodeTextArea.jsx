import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useTimer } from "../../contexts/TimerContext";
const CodeTextArea = ({ text, setText, editorRef }) => {
  const { manageTimer, timerActive, gameState, setGameState } = useTimer();

  // This function will be called when the editor is mounted
  // It saves the editor instance to the ref
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    // Now you can use the editor instance, for example, to get the model
    const model = editor.getModel();
    const value = model.getValue();
  };

  // Handles the change in text for the code editor
  const handleTextChange = () => {
    if (editorRef.current && gameState !== "ended") {
      const model = editorRef.current.getModel();
      const value = model.getValue();
      setText(value);
      if (gameState !== "active") {
        setGameState("active");
        if (!timerActive) {
          manageTimer(true);
        }
      }
    }
  };

  return (
    <div>
      <Editor
        height="50vh"
        width="100%"
        theme="vs-dark"
        defaultLanguage="python"
        onMount={handleEditorDidMount} // Use the onMount prop to handle the editor instance once mounted
        onChange={handleTextChange}
      />
    </div>
  );
};

export default CodeTextArea;
