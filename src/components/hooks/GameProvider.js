import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();
export function useGame() {
    return useContext(GameContext);
}

function GameProvider({ children }) {
    const [on, setOn] = useState(false);
    return <GameContext.Provider value={{ on, setOn }}>{children}</GameContext.Provider>;
}

export default GameProvider;
