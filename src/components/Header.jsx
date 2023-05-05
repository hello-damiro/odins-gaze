import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo-title">
                <div className="logo" />
                <h1>Odin's Gaze</h1>
            </div>
            <div className="options">
                <div>
                    Timer: <span>36s</span>
                </div>
                <button className="about">?</button>
            </div>
        </header>
    );
}

export default Header;
