import './App.css';
import Header from "./components/Header";
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Navigation />
        <Main>
          <div className='subcontent-container'>
            <Subcontent />
            <Subcontent />
            <Subcontent />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
