import { useEffect, useState } from 'react';
import style from './Products.module.css';

function Products() {
  const [list, useList] = useState();
  const [count, setCount] = useState(1);
  useEffect(() => {
    async function getData() {
      try {
        const res = fetch('https://dummyjson.com/products');
      } catch (e) {
        console.error(e.message);
      }
    }
  }, [count]);
  return (
    <div className={style.Products}>
      <div> </div>
    </div>
  );
}

export default Products;
