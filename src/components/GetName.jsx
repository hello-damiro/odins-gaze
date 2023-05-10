import React, { useRef } from 'react';
import { useObjectsUpdate } from './hooks/ObjectsProvider';

function GetName() {
    const game = useObjectsUpdate();
    const input = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.current.value !== '') {
            game.setInit(true);
        }
    };
    return (
        <div className="get-name">
            <input ref={input} type="text" placeholder="Enter name to Play" />
            <button onClick={handleSubmit} className="primary">
                Play
            </button>
        </div>
    );
}

export default GetName;
