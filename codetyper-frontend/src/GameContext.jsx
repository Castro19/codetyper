import React, { useState, useContext, createContext } from "react";

const GameContext = createContext();
const [gameState, setGameState] = useState("idle");

export const GameProvider = ({ children }) => {
  return <GameContext.Provider value={{}} />;
};

export const useGame = () => useContext(GameContext);
