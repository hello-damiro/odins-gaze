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
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const img = document.querySelector('.game-image');
    const vw = img ? img.clientWidth : 0;
    const vh = img ? img.clientHeight : 0;

    const pixel = {
        x: cursorPosition.x + window.pageXOffset,
        y: cursorPosition.y + window.pageYOffset,
    };
    const viewport = {
        x: round((cursorPosition.x * 100) / window.innerWidth),
        y: round((cursorPosition.y * 100) / window.innerHeight),
    };
    const percent = {
        // convert px to % ref to img
        x: round((pixel.x * 100) / vw, 1),
        y: round((pixel.y * 100) / vh, 1),
    };
    return (
        <CursorPositionContext.Provider value={{ pixel, percent, viewport }}>
            <CursorPositionContextUpdate.Provider value={setCursorPosition}>
                {children}
            </CursorPositionContextUpdate.Provider>
        </CursorPositionContext.Provider>
    );
}

export default CursorPositionProvider;
