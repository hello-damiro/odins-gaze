import React from 'react';
import PropTypes from 'prop-types';
import { useObjects } from './hooks/ObjectsProvider';

function SceneSelection() {
    const scenes = useObjects().scenes;
    console.log(scenes);
    return (
        <div className="floating-container">
            <h2>Select scene</h2>
            <div className="scenes">
                {scenes.map((scene) => (
                    <div key={scene.id} className="scene">
                        <h3>{scene.name}</h3>
                        <img src={scene.img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}

SceneSelection.propTypes = {
    scenes: PropTypes.arrayOf({
        name: PropTypes.string,
        img: PropTypes.string,
    }),
};

export default SceneSelection;
