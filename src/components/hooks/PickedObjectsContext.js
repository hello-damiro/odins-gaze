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
    const [found, dispatch] = useReducer(objectsReducer, []);

    const reveal = () => {
        console.log(found, ' vs ', tip);
        if (click === tip && click !== null) {
            const object = lost.find((object) => object.id === tip);
            dispatch({ type: ACTIONS.ADD, payload: object });
        }
    };

    return (
        <PickedObjectsContext.Provider value={{ lost, tip, click, found, reveal }}>
            <PickedObjectsContextUpdate.Provider value={{ setLost, setTip, setClick }}>
                {children}
            </PickedObjectsContextUpdate.Provider>
        </PickedObjectsContext.Provider>
    );
}

export default PickedObjectsProvider;
