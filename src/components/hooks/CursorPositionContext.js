import React, { createContext, useContext, useState } from 'react';
import { round } from '../helper/CommonFunctions';

const CursorPositionContext = createContext();
const CursorPositionContextUpdate = createContext();

export function useCursorPosition() {
    return useContext(CursorPositionContext);
}

export function useCursorPositionUpdate() {
    return useContext(CursorPositionContextUpdate);
}

function CursorPositionProvider({ children }) {
    const img = document.querySelector('.game-image');
    const vw = img ? img.clientWidth : 0;
    const vh = img ? img.clientHeight : 0;

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const ex = cursorPosition.x + window.pageXOffset;
    const ey = cursorPosition.y + window.pageYOffset;

    const pixel = { x: ex, y: ey };
    // convert px to % ref to img
    const percent = { x: round((ex * 100) / vw, 1), y: round((ey * 100) / vh, 1) };
    return (
        <CursorPositionContext.Provider value={{ pixel, percent }}>
            <CursorPositionContextUpdate.Provider value={setCursorPosition}>
                {children}
            </CursorPositionContextUpdate.Provider>
        </CursorPositionContext.Provider>
    );
}

export default CursorPositionProvider;
