import Canvas from './components/Canvas';
import Main from './components/Main';
import CursorPositionProvider from './components/hooks/CursorPositionContext';
import CursorFollowProvider from './components/hooks/CursorFollowContext';

function App() {
    return (
        <div className="App">
            <CursorPositionProvider>
                <CursorFollowProvider>
                    <Main />
                    <Canvas />
                </CursorFollowProvider>
            </CursorPositionProvider>
        </div>
    );
}

export default App;
