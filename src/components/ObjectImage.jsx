import React from 'react';

function ObjectImage({ img, blur }) {
    return <img src={img} style={{ filter: blur !== 0 && `blur(${blur}px)` }} alt="" />;
}

ObjectImage.defaultProps = {
    blur: 0,
};

export default ObjectImage;
