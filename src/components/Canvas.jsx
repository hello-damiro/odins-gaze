import React from 'react';
import img from '../assets/sample_img.webp';

function Canvas() {
    return (
        <main>
            <img src={img} alt="sample" className="game-image" />
        </main>
    );
}

export default Canvas;
