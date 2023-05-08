import React, { useState, useEffect } from 'react';
import { useCursorPositionUpdate } from './hooks/CursorPositionContext';
import { useCursorFollow, useCursorFollowUpdate } from './hooks/CursorFollowContext';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorPositionUpdate = useCursorPositionUpdate();
    const cursorFollow = useCursorFollow();
    const cursorFollowUpdate = useCursorFollowUpdate();

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX + window.pageXOffset, y: e.clientY + window.pageYOffset });
    };

    const handleClick = (e) => {
        console.log('Cursor clicked');
        cursorPositionUpdate({ x: e.clientX, y: e.clientY });
        cursorFollowUpdate(false);
    };

    useEffect(() => {
        if (cursorFollow) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('click', handleMouseMove);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseMove);
        };
    }, [setPosition, cursorFollow]);

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
