import './App.css';
import CreateProduct from './views/CreateProduct';
import { Routes, Route } from 'react-router-dom';
import GetProduct from './views/GetProduct';
import GetDetail from './views/GetDetail';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreateProduct/> }/>
        <Route path='/productos' element={<GetProduct/> }/>
        <Route path= "/productos/:id" element={<GetDetail/> }/>
        <Route path= "/productos/editar/:id" element={ <UpdateProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
