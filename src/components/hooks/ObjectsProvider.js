import React, { createContext, useContext, useReducer, useState } from 'react';
import { objectsReducer } from './ObjectsReducer';
import { ACTIONS } from './ObjectsReducer';
import { delay } from '../utils/delay';
import { pickRandomNumbers } from '../utils/pickRandomNumbers';

// Image should be strictly 1512 x 982 pixels
import imgFile from '../../assets/scene_office.webp';
// Object Data from the Image
import { sceneData } from '../../data/SceneOffice';
// Scenes Data
import { scenesData } from '../../data/Scenes';

const ObjectsContext = createContext();
const ObjectsContextUpdate = createContext();

export function useObjects() {
    return useContext(ObjectsContext);
}

export function useObjectsUpdate() {
    return useContext(ObjectsContextUpdate);
}

function ObjectsProvider({ children }) {
    const imageFile = imgFile;
    const imageData = sceneData;
    const scenes = scenesData;

    const [lost, setLost] = useState([]);
    const [tip, setTip] = useState(null);
    const [click, setClick] = useState(null);
    const [timed, setTimed] = useState(false);
    const [timer, setTimer] = useState(0);
    const [init, setInit] = useState(false);
    const [image, setImage] = useState(imageFile);
    const [scene, setScene] = useState(imageFile);

    const [found, dispatch] = useReducer(objectsReducer, []);

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
            setLost(mapObjects);
            setTimed(true);
        } else {
            setTimed(false);
        }
        console.log('GAME ON', on);
    };

    const showAll = () => {
        const mapObjects = imageData.map((object, index) => ({
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
        dispatch({ type: ACTIONS.SHOW, payload: mapObjects });
    };

    const reveal = () => {
        if (click === tip && click !== null) {
            const object = lost.find((object) => object.id === tip);
            dispatch({ type: ACTIONS.ADD, payload: object });
        }
        if (found.length === lost.length && found.length > 0) {
            console.log('Game over');
            setTimed(false);
            reset();
        }
    };

    const reset = async () => {
        await delay(3000);
        dispatch({ type: ACTIONS.CLEAR });
        setInit(false);
        setTimer(0);
        setLost([]);
        setTip(null);
        setClick(null);
    };

    return (
        <ObjectsContext.Provider
            value={{
                lost,
                tip,
                click,
                timed,
                timer,
                found,
                reveal,
                showAll,
                init,
                image,
                scene,
                scenes,
            }}>
            <ObjectsContextUpdate.Provider
                value={{
                    setLost,
                    setTip,
                    setClick,
                    setTimed,
                    setTimer,
                    setInit,
                    setGame,
                    setScene,
                    setImage,
                }}>
                {children}
            </ObjectsContextUpdate.Provider>
        </ObjectsContext.Provider>
    );
}

export default ObjectsProvider;
