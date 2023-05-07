import React, { useEffect } from 'react';
import Object from './Object';
import ObjectImage from './ObjectImage';
import { sceneGarage } from '../data/SceneGarage';
import { useCursorPosition } from './hooks/CursorPositionContext';

// Image should be strictly 1512 x 982 pixels
import img from '../assets/sample_img.webp';

function Canvas() {
    const cursorPosition = useCursorPosition();

    useEffect(() => {
        console.log('FROM CANVAS', cursorPosition);
    }, [cursorPosition]);

    return (
        <main>
            <div className="game-image ">
                <div className="markers">
                    {sceneGarage.map((object) => (
                        <Object key={object.id} object={object} />
                    ))}
                </div>
                <ObjectImage img={img} blur={0} />
            </div>
        </main>
    );
}

export default Canvas;
