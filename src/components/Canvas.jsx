import React, { useEffect, useState } from 'react';
import Object from './Object';
import ObjectImage from './ObjectImage';
import { sceneGarage } from '../data/SceneGarage';
import { useCursorPosition } from './hooks/CursorPositionContext';
import { pickRandomNumbers } from './helper/CommonFunctions';

// Image should be strictly 1512 x 982 pixels
import image from '../assets/sample_img.webp';

function Canvas() {
    const cursorPosition = useCursorPosition();
    const [pickedObjects, setPickedObjects] = useState([]);

    const checkClickWithinObject = (objectBound, cursorPos) => {
        const { xStart, xStop, yStart, yStop } = objectBound;
        const { x, y } = cursorPos;
        if (x >= xStart && x <= xStop && y >= yStart && y <= yStop) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        const randomNumbers = pickRandomNumbers(3, sceneGarage.length);
        const filteredObjects = sceneGarage.filter((object) => {
            return randomNumbers.includes(object.id);
        });
        const mapObjects = filteredObjects.map((object, index) => ({
            id: index,
            name: object.name,
            bounds: {
                xStart: object.x,
                yStart: object.y,
                xStop: object.x + object.width,
                yStop: object.y + object.height,
            },
        }));
        setPickedObjects(mapObjects);
    }, []);

    useEffect(() => {
        const clickedObjects = pickedObjects.filter((object) => {
            return checkClickWithinObject(object.bounds, cursorPosition);
        });
        clickedObjects.forEach((object) => {
            console.log(`Mouse clicked on ${object.name} with id ${object.id}`);
        });
    }, [cursorPosition, pickedObjects]);

    return (
        <main>
            <div className="game-image ">
                <div className="markers">
                    {pickedObjects.map((object) => (
                        <Object key={object.id} object={object} />
                    ))}
                </div>
                <ObjectImage img={image} blur={0} />
            </div>
        </main>
    );
}

export default Canvas;
