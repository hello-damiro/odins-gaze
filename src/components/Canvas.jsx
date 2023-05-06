import React from 'react';

// Image should be strictly 1512 x 982 pixels
import img from '../assets/sample_img.webp';

function Canvas() {
    return (
        <main>
            <div className="game-image">
                <img src={img} alt="sample" />
            </div>
        </main>
    );
}

export default Canvas;
