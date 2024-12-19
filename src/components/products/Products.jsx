import { useEffect, useState } from 'react';
import style from './Products.module.css';
import Product from '../product/Product';

function Products() {
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(100);
  const [loading, setLoading] = useState(false);
  console.log(list);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products?limit=12&skip=${
            skip * 12
          }&select=title,price,title,rating,thumbnail`
        );
        const data = await res.json();
        setList(d => [...d, ...data.products]);
      } catch (e) {
        console.error(e.message);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [skip]);

  const loadMore = () => {
    if (limit < skip * 12) {
      setError('No more products to load');
      return;
    }
    setSkip(k => k + 1);
  };

  return (
    <div className={style.Products}>
      <div>
        {list.map((c, i) => (
          <Product data={c} key={i} />
        ))}
      </div>
      <div className={style.loadBtn}>
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
}

export default Products;
