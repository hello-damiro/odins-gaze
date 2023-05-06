import React from 'react';
import PropTypes from 'prop-types';

function Object({ x, y, width, height }) {
    return (
        <div
            className="marker"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${width}%`,
                height: `${height}%`,
            }}
        />
    );
}

Object.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default Object;
