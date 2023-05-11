import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { objectsReducer } from './ObjectsReducer';
import { ACTIONS } from './ObjectsReducer';
import { delay } from '../utils/delay';
import { pickRandomIDs } from '../utils/pickRandomNumbers';
import { db } from '../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';

// Image should be strictly 1512 x 982 pixels
// Scenes compilation data
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
    const scenes = scenesData;

    const [init, setInit] = useState(false);
    const [lost, setLost] = useState([]);
    const [tip, setTip] = useState(null);
    const [click, setClick] = useState(null);
    const [timed, setTimed] = useState(false);
    const [timer, setTimer] = useState(0);
    const [image, setImage] = useState(scenesData[0].img);
    const [scene, setScene] = useState(scenesData[0].img);
    const [imageData, setImageData] = useState({});

    const [found, dispatch] = useReducer(objectsReducer, []);

    useEffect(() => {
        fetchScene(scene);
    }, [scene]);

    const fetchScene = async (scene) => {
        setImage(scene.img);
        const scenesCollectionRef = collection(db, `scenes/${scene.obj}/sceneData`);
        try {
            const rawData = await getDocs(scenesCollectionRef);
            const data = rawData.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(scene.obj, data);
            setImageData(data);
        } catch (error) {
            console.error('Error fetching from Firestore:', error);
        }
    };

    const setGame = (on) => {
        if (on) {
            const randomIDs = pickRandomIDs(
                imageData.map((object) => object.id),
                3
            );
            const filteredObjects = imageData.filter((object) => {
                return randomIDs.includes(object.id);
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

    // USED ONLY FOR MAPPING JSON DATA TO IMAGE
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
