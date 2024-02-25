import React, { useContext, createContext, useState } from "react";

const TextContext = createContext();

const TextProvider = ({ children }) => {
  const [text, setText] = useState("");

  return <TextContext.Provider>{children}</TextContext.Provider>;
};

// Custom Hook
const useText = useContext(TextContext);
