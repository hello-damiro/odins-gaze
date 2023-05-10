import React, { createContext, useContext, useReducer, useState } from 'react';
import { objectsReducer } from './ObjectsReducer';
import { ACTIONS } from './ObjectsReducer';

const PickedObjectsContext = createContext();
const PickedObjectsContextUpdate = createContext();

export function usePickedObjects() {
    return useContext(PickedObjectsContext);
}

export function usePickedObjectsUpdate() {
    return useContext(PickedObjectsContextUpdate);
}

function PickedObjectsProvider({ children }) {
    const [lost, setLost] = useState([]);
    const [tip, setTip] = useState(null);
    const [click, setClick] = useState(null);
    const [timed, setTimed] = useState(false);
    const [found, dispatch] = useReducer(objectsReducer, []);

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

    const reset = () => {
        dispatch({ type: ACTIONS.CLEAR });
        setLost([]);
        setTip(null);
        setClick(null);
    };

    return (
        <PickedObjectsContext.Provider value={{ lost, tip, click, timed, found, reveal }}>
            <PickedObjectsContextUpdate.Provider value={{ setLost, setTip, setClick, setTimed }}>
                {children}
            </PickedObjectsContextUpdate.Provider>
        </PickedObjectsContext.Provider>
    );
}

export default PickedObjectsProvider;
