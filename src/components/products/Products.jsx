import { useEffect, useState } from 'react';
import style from './Products.module.css';
import Product from '../product/Product';
import { toast } from 'react-toastify';
import SplashScreen from '../splashScreen/SplashScreen';

function Products({ list, setList, skip, setSkip, cardClick }) {
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(100);
  const [loading, setLoading] = useState(false);
  const batch = 12;

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://dummyjson.com/products?limit=${batch}&skip=${
            skip * batch
          }&select=title,price,title,rating,thumbnail`
        );
        const data = await res.json();
        setList(d => [...d, ...data.products]);
        setLimit(data.total);
        setLoading(false);
      } catch (e) {
        console.error(e.message);
        toast.error(e.message);
        setError(e.message);
        setLoading(false);
      }
    }
    getData();
  }, [skip]);

  const loadMore = () => {
    if (limit < skip * batch) {
      toast.warn('No more products to load');
      return;
    }
    setSkip(k => k + 1);
  };

  return (
    <div className={style.products}>
      {loading && <SplashScreen />}
      {error ? (
        <h1>{error} </h1>
      ) : (
        <>
          <div className={style.productList}>
            {list.map((c, i) => (
              <Product data={c} key={i} cardClick={cardClick} />
            ))}
          </div>
          <div className={style.loadBtn}>
            <button onClick={loadMore}>Load More</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
