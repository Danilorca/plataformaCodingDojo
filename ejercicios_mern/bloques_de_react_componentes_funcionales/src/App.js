
import './App.css';
import Home from "./Views/Home/Home";
import Header from "./Components/Header/Header";
import Navigation from './Components/Navigation/Navigation';
import Main from "./Components/Navigation/Navigation";
import SubContent from "./Components/SubContent/SubContent"

function App() {
  return (
    <div className="App">
      <Home>
        <Header />
          <Navigation />
          <Main>
            <SubContent />
            <SubContent />
            <SubContent />
          </Main>
      </Home>
    </div>
  );
}

export default App;
