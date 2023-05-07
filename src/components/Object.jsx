import React from 'react';
import PropTypes from 'prop-types';

function Object({ object }) {
    return (
        <div
            className="marker"
            style={{
                left: `${object.x}%`,
                top: `${object.y}%`,
                width: `${object.width}%`,
                height: `${object.height}%`,
            }}
            onClick={() => {
                console.log('OBJECT', object.left, object.top);
            }}
        />
    );
}

Object.propTypes = {
    object: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }),
};

export default Object;
