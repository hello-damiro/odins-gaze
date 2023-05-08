import React, { useState, useEffect } from 'react';
import { useCursorPositionUpdate } from './hooks/CursorPositionContext';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [follow, setFollow] = useState(true);
    const cursorPositionUpdate = useCursorPositionUpdate();

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e) => {
        cursorPositionUpdate(position);
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
