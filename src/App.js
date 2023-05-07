import Canvas from './components/Canvas';
import Main from './components/Main';
import CursorPositionProvider from './components/hooks/CursorPositionContext';

function App() {
    return (
        <div className="App">
            <CursorPositionProvider>
                <Main />
                <Canvas />
            </CursorPositionProvider>
        </div>
    );
}

export default App;
