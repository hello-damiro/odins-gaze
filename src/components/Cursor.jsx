import React, { useState, useEffect } from 'react';
import { useObjects } from './hooks/ObjectsContext';
import { useCursor, useCursorUpdate } from './hooks/CursorContext';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursor = useCursor();
    const cursorUpdate = useCursorUpdate();
    const objects = useObjects();

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX + window.pageXOffset, y: e.clientY + window.pageYOffset });
    };

    const handleClick = (e) => {
        cursorUpdate.setPosition({ x: e.clientX, y: e.clientY });
        if (objects.lost.length > 0) cursorUpdate.setFollow(false);
    };

    useEffect(() => {
        if (cursor.follow) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('click', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseMove);
        };
    }, [cursor.follow]);

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
