import React, { useEffect } from 'react';
import Cursor from './Cursor';
import Tooltip from './Tooltip';
import Object from './Object';
import ObjectImage from './ObjectImage';
import { useCursor, useCursorUpdate } from './hooks/CursorProvider';
import { useObjects, useObjectsUpdate } from './hooks/ObjectsProvider';

function Canvas() {
    const cursor = useCursor().percent;
    const cursorUpdate = useCursorUpdate();

    const objects = useObjects();
    const setObjects = useObjectsUpdate();

    const handleClick = () => {
        cursorUpdate.setPosition({ x: window.clientX, y: window.clientY });
        cursorUpdate.setFollow(true);
    };

    const checkClickWithinBounds = (objectBound, cursorPos) => {
        const { xStart, xStop, yStart, yStop } = objectBound;
        const { x, y } = cursorPos;
        if (x >= xStart && x <= xStop && y >= yStart && y <= yStop) {
            return true;
        } else {
            return false;
        }
    };

    // USED ONLY FOR MAPPING JSON DATA TO IMAGE
    useEffect(() => {
        objects.showAll();
    }, []);

    // useEffect(() => {
    //     const clickedObject = objects.lost.find((object) =>
    //         checkClickWithinBounds(object.bounds, cursor)
    //     );
    //     if (clickedObject) {
    //         setObjects.setClick(clickedObject.id);
    //     } else {
    //         setObjects.setClick(null);
    //     }
    // }, [cursor, objects, setObjects]);

    return (
        <main>
            <Cursor />
            <Tooltip />
            <div className="game-image" onClick={handleClick}>
                <div className="markers">
                    {objects.found.map((object) => (
                        <Object key={object.id} object={object} show={object.shown} />
                    ))}
                </div>
                {/* <ObjectImage img={objects.image} blur={objects.init ? 0 : 100} /> */}
                <ObjectImage img={objects.image} />
            </div>
        </main>
    );
}

export default Canvas;
