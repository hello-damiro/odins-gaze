import React, { useState, useEffect } from 'react';
import { usePickedObjects } from './hooks/PickedObjectsContext';

function Header() {
    const [runTime, setRunTime] = useState(0);
    // const [timed, setTimed] = useState(true);

    const timed = usePickedObjects().timed;

    useEffect(() => {
        let intervalId;

        if (timed) {
            intervalId = setInterval(() => {
                setRunTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timed]);

    return (
        <header>
            <div className="logo-title">
                <div className="logo" />
                <h1>Odin's Gaze</h1>
            </div>
            <div className="options">
                <div>
                    Elapsed time: <span>{runTime}s</span>
                </div>
                <button className="about">?</button>
            </div>
        </header>
    );
}

export default Header;
