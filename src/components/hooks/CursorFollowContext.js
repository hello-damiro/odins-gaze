import React, { createContext, useContext, useState } from 'react';

const CursorFollowContext = createContext();
const CursorFollowContextUpdate = createContext();

export function useCursorFollow() {
    return useContext(CursorFollowContext);
}

export function useCursorFollowUpdate() {
    return useContext(CursorFollowContextUpdate);
}

function CursorFollowProvider({ children }) {
    const [cursorFollow, setCursorFollow] = useState(true);
    return (
        <CursorFollowContext.Provider value={cursorFollow}>
            <CursorFollowContextUpdate.Provider value={setCursorFollow}>
                {children}
            </CursorFollowContextUpdate.Provider>
        </CursorFollowContext.Provider>
    );
}

export default CursorFollowProvider;
