import React from 'react';
import PropTypes from 'prop-types';

function Object({ object, show }) {
    const bound = object.bounds;
    return (
        <div
            className={`marker ${show ? 'show' : ''}`}
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

Object.defaultProps = {
    show: false,
};

Object.propTypes = {
    object: PropTypes.object,
    show: PropTypes.bool,
};

export default Object;
