import React, { useState, useEffect } from 'react';
import { useCursorPositionUpdate } from './hooks/CursorPositionContext';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [follow, setFollow] = useState(true);
    const cursorPositionUpdate = useCursorPositionUpdate();

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX + window.pageXOffset, y: e.clientY + window.pageYOffset });
    };

    const handleCanvasClick = () => {
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
            onClick={handleCanvasClick}
        />
    );
}

export default Cursor;
