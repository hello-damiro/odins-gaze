import React from 'react';
import PropTypes from 'prop-types';
import { useObjects, useObjectsUpdate } from './hooks/ObjectsProvider';

function SceneSelection() {
    const scenes = useObjects().scenes;
    const setImage = useObjectsUpdate().setImage;
    const handleClick = (img) => {
        setImage(img);
    };
    return (
        <div className="floating-container">
            <h2>Select Scene</h2>
            <div className="scenes">
                {scenes.map((scene) => (
                    <div key={scene.id} onClick={() => handleClick(scene.img)} className="scene">
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
