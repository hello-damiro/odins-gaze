import React, { createContext, useContext, useState } from 'react';
import { useObjectsUpdate } from './ObjectsProvider';
import { pickRandomNumbers } from '../utils/pickRandomNumbers';

// Image should be strictly 1512 x 982 pixels
import imgFile from '../../assets/sample_img.webp';
// Object Data from the Image
import { sceneGarage } from '../../data/SceneGarage';

const GameContext = createContext();
export function useGame() {
    return useContext(GameContext);
}

function GameProvider({ children }) {
    const imageFile = imgFile;
    const imageData = sceneGarage;

    const [on, setOn] = useState(false);
    const [image, setImage] = useState('');

    const objects = useObjectsUpdate();

    const setGame = (on) => {
        setImage(imageFile);
        if (on) {
            const randomNumbers = pickRandomNumbers(3, imageData.length);
            const filteredObjects = imageData.filter((object) => {
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
            objects.setLost(mapObjects);
            objects.setTimed(true);
        } else {
            objects.setTimed(false);
        }
        console.log('GAME ON', on);
    };

    return (
        <GameContext.Provider value={{ on, setOn, image, setGame }}>
            {children}
        </GameContext.Provider>
    );
}

export default GameProvider;
