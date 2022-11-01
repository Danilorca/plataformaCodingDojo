
import './App.css';
import PackageForm from './components/PackageForm';
import { Routes, Route } from 'react-router-dom';
import ProductoDetalle from './components/ProductoDetalle';
import ProductoEditado from './components/ProductoEditado';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ <ProductList/>} />
        <Route path='/product/:id' element={<ProductoDetalle/> } />
        <Route path='/product/update/:id' element={<ProductoEditado/> } />
        <Route path='/product/create/' element={<PackageForm/> } />
      </Routes>



    </div>
  );
}

export default App;
