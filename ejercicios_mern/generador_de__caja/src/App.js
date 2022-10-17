import './App.css';
import BoxForm from './components/BoxForm'
import { useState } from 'react';
import Boxes from './view/Boxes';

function App() {

  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes={setBoxes} />
      <Boxes boxes={boxes} />
    </div>
  );
}

export default App;
