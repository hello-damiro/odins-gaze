import React, { createContext, useContext, useState } from 'react';

const CursorPositionContext = createContext();
const CursorPositionContextUpdate = createContext();

export function useCursorPosition() {
    return useContext(CursorPositionContext);
}

export function useCursorPositionUpdate() {
    return useContext(CursorPositionContextUpdate);
}

function CursorPositionProvider({ children }) {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    return (
        <CursorPositionContext.Provider value={cursorPosition}>
            <CursorPositionContextUpdate.Provider value={setCursorPosition}>
                {children}
            </CursorPositionContextUpdate.Provider>
        </CursorPositionContext.Provider>
    );
}

export default CursorPositionProvider;
