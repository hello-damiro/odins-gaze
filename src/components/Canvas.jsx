import React, { useEffect } from 'react';
import Object from './Object';
import ObjectImage from './ObjectImage';
import { sceneGarage } from '../data/SceneGarage';
import { useCursorPosition } from './hooks/CursorPositionContext';

// Image should be strictly 1512 x 982 pixels
import image from '../assets/sample_img.webp';

function Canvas() {
    const cursorPosition = useCursorPosition();

    const objectBounds = {
        xStart: 23,
        xStop: 26.2,
        yStart: 56,
        yStop: 67.5,
    };

    const checkClickWithinObject = (obj, cursorPos) => {
        const { xStart, xStop, yStart, yStop } = objectBounds;
        const { x, y } = cursorPos;
        if (x >= xStart && x <= xStop && y >= yStart && y <= yStop) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        const isWithinBounds = checkClickWithinObject(objectBounds, cursorPosition);
        console.log('BOUNDS', isWithinBounds);
    }, [cursorPosition, objectBounds]);

    return (
        <main>
            <div className="game-image ">
                <div className="markers">
                    {sceneGarage.map((object) => (
                        <Object key={object.id} object={object} />
                    ))}
                </div>
                <ObjectImage img={image} blur={0} />
            </div>
        </main>
    );
}

export default Canvas;
