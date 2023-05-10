import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useCursor, useCursorUpdate } from './hooks/CursorContext';
import { useObjects, useObjectsUpdate } from './hooks/ObjectsContext';

function Tooltip() {
    const cursorPx = useCursor().pixel;
    const cursorVp = useCursor().viewport;
    const objects = useObjects();
    const setObjects = useObjectsUpdate();
    const cursor = useCursor();
    const cursorUpdate = useCursorUpdate();

    const [tipClass, setTipClass] = useState('');
    const [currentID, setCurrentID] = useState(null);

    const handleClick = (id) => {
        cursorUpdate.setFollow(true);
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

    if (cursor.follow || objects.lost.length === 0) {
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
