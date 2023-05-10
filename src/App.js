import Canvas from './components/Canvas';
import Main from './components/Main';
import CursorProvider from './components/hooks/CursorContext';
import ObjectsProvider from './components/hooks/ObjectsContext';

function App() {
    return (
        <div className="App">
            <CursorProvider>
                <ObjectsProvider>
                    <Main />
                    <Canvas />
                </ObjectsProvider>
            </CursorProvider>
        </div>
    );
}

export default App;
