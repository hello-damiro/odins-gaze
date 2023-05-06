import React, { useState, useLayoutEffect } from 'react';

function Cursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e) => {
        setPos({ x: e.clientX, y: e.clientY });
    };

    useLayoutEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [pos]);

    return (
        <div
            className="cursor"
            style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
            }}
        />
    );
}

export default Cursor;
