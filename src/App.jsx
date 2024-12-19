import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/homepage/Homepage';
import ProductDetails from './pages/productDetails/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
