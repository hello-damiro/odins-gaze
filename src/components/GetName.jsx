import React, { useRef } from 'react';
import { useGame } from './hooks/GameProvider';

function GetName() {
    const game = useGame();
    const input = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.current.value !== '') {
            game.setOn(true);
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
