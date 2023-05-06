import React from 'react';
import Object from './Object';
import { sceneGarage } from '../data/SceneGarage';
import Cursor from './Cursor';
import ObjectImage from './ObjectImage';

// Image should be strictly 1512 x 982 pixels
import img from '../assets/sample_img.webp';

function Canvas() {
    return (
        <main>
            <div className="game-image ">
                <Cursor />
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
