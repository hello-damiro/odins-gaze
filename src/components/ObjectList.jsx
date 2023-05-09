import React from 'react';
import { usePickedObjects } from './hooks/PickedObjectsContext';

function ObjectList() {
    const objects = usePickedObjects().lost;
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
