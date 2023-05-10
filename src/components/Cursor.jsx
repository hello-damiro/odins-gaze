import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePickedObjects } from './hooks/PickedObjectsContext';
import { useCursorPositionUpdate } from './hooks/CursorPositionContext';
import { useCursorFollow, useCursorFollowUpdate } from './hooks/CursorFollowContext';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorPositionUpdate = useCursorPositionUpdate();
    const cursorFollow = useCursorFollow();
    const cursorFollowUpdate = useCursorFollowUpdate();
    const objects = usePickedObjects();

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX + window.pageXOffset, y: e.clientY + window.pageYOffset });
    };

    const handleClick = (e) => {
        cursorPositionUpdate({ x: e.clientX, y: e.clientY });
        if (objects.lost.length > 0) cursorFollowUpdate(false);
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
    }, [cursorFollow]);

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
