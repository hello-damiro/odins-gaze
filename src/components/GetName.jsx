import React from 'react';

function GetName() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    };
    return (
        <div className="get-name">
            <input type="text" placeholder="Enter name to Play" />
            <button onSubmit={handleSubmit} className="primary">
                Submit
            </button>
        </div>
    );
}

export default GetName;
