import React, { useEffect, useState, useReducer } from 'react';
import Object from './Object';
import ObjectImage from './ObjectImage';
import { useCursorPosition } from './hooks/CursorPositionContext';
import { pickRandomNumbers } from './helper/CommonFunctions';
import { objectsReducer } from './hooks/ObjectsReducer';
import { ACTIONS } from './hooks/ObjectsReducer';

// Image should be strictly 1512 x 982 pixels
import image from '../assets/sample_img.webp';
// Object Data from the Image
import { sceneGarage } from '../data/SceneGarage';

function Canvas() {
    const cursor = useCursorPosition().percent;
    const [pickedObjects, setPickedObjects] = useState([]);
    const [objectState, dispatch] = useReducer(objectsReducer, []);

    const checkClickWithinBounds = (objectBound, cursorPos) => {
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
            shown: false,
            bounds: {
                xStart: object.x,
                yStart: object.y,
                xStop: object.x + object.width,
                yStop: object.y + object.height,
            },
        }));
        console.log(mapObjects);
        setPickedObjects(mapObjects);
    }, []);

    useEffect(() => {
        console.log(objectState);
        const clickedObjects = pickedObjects.filter((object) => {
            return checkClickWithinBounds(object.bounds, cursor);
        });
        clickedObjects.forEach((object) => {
            console.log(`Mouse clicked on ${object.name} with id ${object.id}`);
        });
        if (clickedObjects.length > 0) {
            dispatch({ type: ACTIONS.ADD, payload: clickedObjects[0] });
        }
    }, [cursor, pickedObjects, objectState]);

    return (
        <main>
            <div className="game-image ">
                <div className="markers">
                    {objectState.map((object) => (
                        <Object key={object.id} object={object} show={object.shown} />
                    ))}
                </div>
                <ObjectImage img={image} blur={0} />
            </div>
        </main>
    );
}

export default Canvas;
