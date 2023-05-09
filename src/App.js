import Canvas from './components/Canvas';
import Main from './components/Main';
import CursorPositionProvider from './components/hooks/CursorPositionContext';
import CursorFollowProvider from './components/hooks/CursorFollowContext';
import PickedObjectsProvider from './components/hooks/PickedObjectsContext';

function App() {
    return (
        <div className="App">
            <CursorPositionProvider>
                <CursorFollowProvider>
                    <PickedObjectsProvider>
                        <Main />
                        <Canvas />
                    </PickedObjectsProvider>
                </CursorFollowProvider>
            </CursorPositionProvider>
        </div>
    );
}

export default App;
