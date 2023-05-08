import React from 'react';
import PropTypes from 'prop-types';

function Object({ object }) {
    const bound = object.bounds;
    return (
        <div
            className="marker"
            style={{
                left: `${bound.xStart}%`,
                top: `${bound.yStart}%`,
                width: `${bound.xStop - bound.xStart}%`,
                height: `${bound.yStop - bound.yStart}%`,
            }}
            onClick={() => {
                console.log('OBJECT', bound.xStart, bound.yStart);
            }}
        />
    );
}

Object.propTypes = {
    object: PropTypes.object,
};

export default Object;
