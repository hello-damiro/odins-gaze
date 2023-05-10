import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useCursor, useCursorUpdate } from './hooks/CursorProvider';
import { useObjects, useObjectsUpdate } from './hooks/ObjectsProvider';

function Tooltip() {
    const cursor = useCursor();
    const cursorPx = useCursor().pixel;
    const cursorVp = useCursor().viewport;
    const cursorUpdate = useCursorUpdate();
    const objects = useObjects();
    const objectsUpdate = useObjectsUpdate();

    const [tipClass, setTipClass] = useState('');
    const [currentID, setCurrentID] = useState(null);

    const handleClick = (id) => {
        if (objects.init) {
            cursorUpdate.setFollow(true);
            setCurrentID(id);
        }
    };

    useEffect(() => {
        objectsUpdate.setTip(currentID);
        objects.reveal();
        setCurrentID(null);
    }, [currentID, objects, objectsUpdate]);

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
