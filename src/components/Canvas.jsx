import React, { useEffect, useCallback } from 'react';
import Tooltip from './Tooltip';
import Cursor from './Cursor';
import Object from './Object';
import ObjectImage from './ObjectImage';
import { pickRandomNumbers } from './helper/CommonFunctions';
import { useCursor, useCursorUpdate } from './hooks/CursorProvider';
import { useObjects, useObjectsUpdate } from './hooks/ObjectsProvider';

// Image should be strictly 1512 x 982 pixels
import image from '../assets/sample_img.webp';
// Object Data from the Image
import { sceneGarage } from '../data/SceneGarage';
import { useGame } from './hooks/GameProvider';

function Canvas() {
    const cursor = useCursor().percent;
    const cursorUpdate = useCursorUpdate();

    const objects = useObjects();
    const setObjects = useObjectsUpdate();

    const game = useGame();

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

    const setGame = useCallback(() => {
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
        setObjects.setLost(mapObjects);
        if (game.on) setObjects.setTimed(true);
    }, [game, setObjects]);

    useEffect(() => {
        setGame(false);
    }, []);

    useEffect(() => {
        console.log('GAME ON', game.on);
        const clickedObject = objects.lost.find((object) =>
            checkClickWithinBounds(object.bounds, cursor)
        );
        if (clickedObject) {
            setObjects.setClick(clickedObject.id);
        } else {
            setObjects.setClick(null);
        }
    }, [cursor, objects, setObjects, game.on, setGame]);

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
                <ObjectImage img={image} blur={game.on ? 0 : 100} />
            </div>
        </main>
    );
}

export default Canvas;
