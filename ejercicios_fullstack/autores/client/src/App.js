import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/new' element={<NewAuthor/>}/>
        <Route path='/edit/:id' element={<EditAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
