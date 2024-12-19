import { BrowserRouter, Routes, Route } from 'react-router';
import Homepage from './pages/homepage/Homepage';
import ProductDetails from './pages/productDetails/ProductDetails';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
