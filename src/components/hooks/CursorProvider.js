import React, { createContext, useContext, useState } from 'react';
import { roundOff } from '../utils/roundOff';

const CursorContext = createContext();
const CursorContextUpdate = createContext();

export function useCursor() {
    return useContext(CursorContext);
}

export function useCursorUpdate() {
    return useContext(CursorContextUpdate);
}

function CursorProvider({ children }) {
    const [follow, setFollow] = useState(true);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const img = document.querySelector('.game-image');
    const vw = img ? img.clientWidth : 0;
    const vh = img ? img.clientHeight : 0;

    const pixel = {
        x: position.x + window.pageXOffset,
        y: position.y + window.pageYOffset,
    };
    const viewport = {
        x: roundOff((position.x * 100) / window.innerWidth),
        y: roundOff((position.y * 100) / window.innerHeight),
    };
    const percent = {
        // convert px to % ref to img
        x: roundOff((pixel.x * 100) / vw, 1),
        y: roundOff((pixel.y * 100) / vh, 1),
    };
    return (
        <CursorContext.Provider value={{ pixel, percent, viewport, follow }}>
            <CursorContextUpdate.Provider value={{ setPosition, setFollow }}>
                {children}
            </CursorContextUpdate.Provider>
        </CursorContext.Provider>
    );
}

export default CursorProvider;
