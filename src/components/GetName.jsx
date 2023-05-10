import React from 'react';
import { useGame } from './hooks/GameProvider';

function GetName() {
    const game = useGame();
    const handleSubmit = (e) => {
        console.log('GAME ON!');
        e.preventDefault();
        game.setOn(true);
    };
    return (
        <div className="get-name">
            <input type="text" placeholder="Enter name to Play" />
            <button onSubmit={handleSubmit} className="primary">
                Play
            </button>
        </div>
    );
}

export default GetName;
