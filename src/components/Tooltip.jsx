import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useCursorPosition } from './hooks/CursorPositionContext';
import { useCursorFollow, useCursorFollowUpdate } from './hooks/CursorFollowContext';
import { usePickedObjects, usePickedObjectsUpdate } from './hooks/PickedObjectsContext';

function Tooltip() {
    const cursorPx = useCursorPosition().pixel;
    const cursorVp = useCursorPosition().viewport;
    const objects = usePickedObjects();
    const setObjects = usePickedObjectsUpdate();
    const cursorFollow = useCursorFollow();
    const cursorFollowUpdate = useCursorFollowUpdate();

    const [tipClass, setTipClass] = useState('');
    const [currentID, setCurrentID] = useState(null);

    const handleClick = (id) => {
        cursorFollowUpdate(true);
        setCurrentID(id);
    };

    useEffect(() => {
        setObjects.setTip(currentID);
        objects.reveal();
        setCurrentID(null);
    }, [currentID, objects, setObjects]);

    useLayoutEffect(() => {
        const vert = cursorVp.y < 50 ? 'top' : 'bottom';
        const hori = cursorVp.x < 50 ? 'left' : 'right';
        setTipClass(`tooltip ${vert} ${hori}`);
    }, [cursorVp]);

    if (cursorFollow || objects.lost.length === 0) {
        return null;
    }

    return (
        <div className={tipClass} style={{ left: `${cursorPx.x}px`, top: `${cursorPx.y}px` }}>
            <h4>Select Object</h4>
            {objects.lost.map((object) => (
                <button onClick={() => handleClick(object.id)} className="tip" key={object.id}>
                    {object.name}
                </button>
            ))}
        </div>
    );
}

export default Tooltip;
