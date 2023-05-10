import Canvas from './components/Canvas';
import Main from './components/Main';
import CursorProvider from './components/hooks/CursorProvider';
import ObjectsProvider from './components/hooks/ObjectsProvider';
import GameProvider from './components/hooks/GameProvider';

function App() {
    return (
        <div className="App">
            <GameProvider>
                <CursorProvider>
                    <ObjectsProvider>
                        <Main />
                        <Canvas />
                    </ObjectsProvider>
                </CursorProvider>
            </GameProvider>
        </div>
    );
}

export default App;
