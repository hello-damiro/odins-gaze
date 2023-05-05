import Header from './components/Header';
import ObjectList from './components/ObjectList';
import Footer from './components/Footer';
import GetName from './components/GetName';
import Canvas from './components/Canvas';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="container">
                    <Header />
                    <ObjectList />
                    <Footer />
                    <GetName />
                </div>
            </div>
            <Canvas />
        </div>
    );
}

export default App;
