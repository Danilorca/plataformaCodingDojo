
import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from './component/Home';
import Numero from './component/Numero';
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/:id' element={<Numero />} />
        <Route path= '/:palabra/:color/:fondo'  element= {<Hello />} />
      </Routes>
    </div>
  );
}

export default App;
