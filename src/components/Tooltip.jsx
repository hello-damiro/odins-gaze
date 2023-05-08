import React, { useEffect } from 'react';
import { useCursorPosition } from './hooks/CursorPositionContext';

function Tooltip() {
    const cursor = useCursorPosition().pixel;
    useEffect(() => {}, [cursor]);
    return (
        <div className="tooltip " style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }}>
            {cursor.x} / {cursor.y}
        </div>
    );
}

export default Tooltip;
