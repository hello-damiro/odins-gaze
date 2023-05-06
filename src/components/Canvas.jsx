import React from 'react';
import Object from './Object';
import { sceneGarage } from '../data/SceneGarage';

// Image should be strictly 1512 x 982 pixels
import img from '../assets/sample_img.webp';

function Canvas() {
    return (
        <main>
            <div className="game-image ">
                <div className="markers">
                    {sceneGarage.map((object) => (
                        <Object
                            key={object.id}
                            x={object.x}
                            y={object.y}
                            width={object.width}
                            height={object.height}
                        />
                    ))}
                </div>
                <img src={img} alt="sample" className="" />
            </div>
        </main>
    );
}

export default Canvas;
