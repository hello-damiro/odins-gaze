import React, { useState, useEffect } from 'react';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [follow, setFollow] = useState(true);
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX + window.pageXOffset, y: e.clientY + window.pageYOffset });
    };
    const handleMouseClick = (e) => {
        setPosition({ x: e.clientX + window.pageXOffset, y: e.clientY + window.pageYOffset });
        setFollow((prevValue) => !prevValue);
    };

    useEffect(() => {
        if (follow) window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleMouseClick);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleMouseClick);
        };
    }, [setPosition, setFollow, follow]);

    return (
        <div
            className="cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
}

export default Cursor;
