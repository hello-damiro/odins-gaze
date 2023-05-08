import React, { useLayoutEffect, useState } from 'react';
import { useCursorPosition } from './hooks/CursorPositionContext';
import { useCursorFollow, useCursorFollowUpdate } from './hooks/CursorFollowContext';

function Tooltip() {
    const cursorPx = useCursorPosition().pixel;
    const cursorPc = useCursorPosition().percent;
    const cursorVp = useCursorPosition().viewport;

    const cursorFollow = useCursorFollow();
    const cursorFollowUpdate = useCursorFollowUpdate();
    const [tipClass, setTipClass] = useState('');

    const handleClick = () => {
        console.log('TIP', cursorFollow);
        cursorFollowUpdate(true);
    };

    useLayoutEffect(() => {
        const vert = cursorVp.y < 50 ? 'top' : 'bottom';
        const hori = cursorVp.x < 50 ? 'left' : 'right';
        setTipClass(`tooltip ${vert} ${hori}`);
    }, [cursorVp]);

    if (cursorFollow) {
        return null;
    }
    return (
        <div className={tipClass} style={{ left: `${cursorPx.x}px`, top: `${cursorPx.y}px` }}>
            <h4>Select Object</h4>
            <button onClick={handleClick} className="tip">
                WIN X: {cursorVp.x}
            </button>
            <button onClick={handleClick} className="tip">
                WIN Y: {cursorVp.y}
            </button>
            <button onClick={handleClick} className="tip">
                {cursorPc.x} / {cursorPc.y}
            </button>
        </div>
    );
}

export default Tooltip;
