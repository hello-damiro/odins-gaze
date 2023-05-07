import React, { useState, useEffect } from 'react';
import { useCursorPositionUpdate } from './hooks/CursorPositionContext';
import { round } from './helper/CommonFunctions';

function Cursor() {
    const img = document.querySelector('.game-image');
    const vw = img.clientWidth;
    const vh = img.clientHeight;

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [follow, setFollow] = useState(true);
    const cursorPositionUpdate = useCursorPositionUpdate();

    const handleMouseMove = (e) => {
        // setPosition({ x: e.clientX + window.pageXOffset, y: e.clientY + window.pageYOffset });
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
        const ex = e.clientX + window.pageXOffset;
        const ey = e.clientY + window.pageYOffset;
        // convert px to %
        const cursorPercent = { x: round((ex * 100) / vw, 1), y: round((ey * 100) / vh, 1) };
        console.log('CURSOR', cursorPercent.x, cursorPercent.y);
        cursorPositionUpdate(cursorPercent);
    };

    useEffect(() => {
        if (follow) window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [setPosition, setFollow, follow]);

    return (
        <div
            className="cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
            onClick={handleClick}
        />
    );
}

export default Cursor;
