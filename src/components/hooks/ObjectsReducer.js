export const ACTIONS = {
    ADD: 'add',
    CLEAR: 'clear',
    SHOW: 'show',
};

export function objectsReducer(objectState, action) {
    switch (action.type) {
        case ACTIONS.ADD: {
            const { id, name, bounds } = action.payload;
            if (objectState.some((item) => item.id === id)) {
                return objectState;
            }
            const newStateItem = { id, name, bounds, shown: true };
            const newState = [...objectState, newStateItem];
            objectState = newState;
            return objectState;
        }
        case ACTIONS.SHOW: {
            const objects = action.payload;
            const updatedObjectState = objects.map((object) => {
                return { ...object, shown: true };
            });
            console.log(updatedObjectState);
            return updatedObjectState;
        }
        case ACTIONS.CLEAR: {
            objectState = [];
            return objectState;
        }
        default:
            return objectState;
    }
}
