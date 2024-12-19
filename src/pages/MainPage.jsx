import { BrowserRouter, Routes, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Homepage from './homepage/Homepage';
import ProductDetails from './productDetails/ProductDetails';
import { useEffect, useRef, useState } from 'react';

function MainPage() {
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const element = useRef(null);
  const cardClick = e => (element.current = e.target);
  element.current && element.current.focus();

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path='/'
          element={
            <Homepage
              list={list}
              setList={setList}
              skip={skip}
              setSkip={setSkip}
              cardClick={cardClick}
              element={element}
            />
          }
        />
        <Route path='/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainPage;
