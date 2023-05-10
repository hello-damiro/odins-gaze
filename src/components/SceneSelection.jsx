import React from 'react';
import PropTypes from 'prop-types';

function SceneSelection({ scenes }) {
    return (
        <div className="scenes">
            {scenes.map((scene) => (
                <div className="scene">
                    <h3>{scene.name}</h3>
                    <img src="scene.img" alt="" />
                </div>
            ))}
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
