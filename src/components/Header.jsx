import React, { useEffect } from 'react';
import { useObjects, useObjectsUpdate } from './hooks/ObjectsContext';

function Header() {
    const object = useObjects();
    const objectUpdate = useObjectsUpdate();

    useEffect(() => {
        let intervalId;
        if (object.timed) {
            intervalId = setInterval(() => {
                objectUpdate.setTimer((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [object, objectUpdate]);

    return (
        <header>
            <div className="logo-title">
                <div className="logo" />
                <h1>Odin's Gaze</h1>
            </div>
            <div className="options">
                <div>
                    Elapsed time: <span>{object.timer}s</span>
                </div>
                <button className="about">?</button>
            </div>
        </header>
    );
}

export default Header;
