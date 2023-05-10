import React from 'react';
import { useObjects } from './hooks/ObjectsProvider';

function ObjectList() {
    const objects = useObjects().lost;
    return (
        <div className="objects-list">
            <ul>
                {objects.map((object) => (
                    <li key={object.id}>{object.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ObjectList;
