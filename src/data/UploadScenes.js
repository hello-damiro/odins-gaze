import React from 'react';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { sceneData } from './SceneYard';

function UploadScenes() {
    const scenesCollectionRef = collection(db, 'scenes/yard/sceneData');

    const handleClick = async () => {
        const addDocsPromises = sceneData.map((element) => {
            return addDoc(scenesCollectionRef, {
                name: element.name,
                x: element.x,
                y: element.y,
                width: element.width,
                height: element.height,
            });
        });
        try {
            await Promise.all(addDocsPromises);
            console.log('Data written to Firestore successfully!');
        } catch (error) {
            console.error('Error writing data to Firestore:', error);
        }
    };

    return (
        <button onClick={handleClick} className="primary">
            Upload
        </button>
    );
}

export default UploadScenes;
