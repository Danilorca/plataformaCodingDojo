
import './App.css';
import PackageForm from './components/PackageForm';
import { Routes, Route } from 'react-router-dom';
import ProductoDetalle from './components/ProductoDetalle';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<PackageForm /> } />
        <Route path='/product/:id' element={<ProductoDetalle/> } />
      </Routes>



    </div>
  );
}

export default App;
