import React, { createContext, useContext, useReducer, useState } from 'react';
import { useGame } from './GameProvider';
import { objectsReducer } from './ObjectsReducer';
import { ACTIONS } from './ObjectsReducer';

const ObjectsContext = createContext();
const ObjectsContextUpdate = createContext();

export function useObjects() {
    return useContext(ObjectsContext);
}

export function useObjectsUpdate() {
    return useContext(ObjectsContextUpdate);
}

function ObjectsProvider({ children }) {
    const [lost, setLost] = useState([]);
    const [tip, setTip] = useState(null);
    const [click, setClick] = useState(null);
    const [timed, setTimed] = useState(false);
    const [timer, setTimer] = useState(0);
    const [found, dispatch] = useReducer(objectsReducer, []);

    const game = useGame();

    const reveal = () => {
        if (click === tip && click !== null) {
            const object = lost.find((object) => object.id === tip);
            dispatch({ type: ACTIONS.ADD, payload: object });
        }
        if (found.length === lost.length && found.length > 0) {
            console.log('Game over');
            game.setOn(false);
            reset();
        }
    };

    const reset = () => {
        dispatch({ type: ACTIONS.CLEAR });
        setTimer(0);
        setLost([]);
        setTip(null);
        setClick(null);
    };

    return (
        <ObjectsContext.Provider value={{ lost, tip, click, timed, timer, found, reveal }}>
            <ObjectsContextUpdate.Provider
                value={{ setLost, setTip, setClick, setTimed, setTimer }}>
                {children}
            </ObjectsContextUpdate.Provider>
        </ObjectsContext.Provider>
    );
}

export default ObjectsProvider;
