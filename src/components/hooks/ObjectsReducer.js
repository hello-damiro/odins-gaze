export const ACTIONS = {
    ADD: 'add',
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
        default:
            return objectState;
    }
}