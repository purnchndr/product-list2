import { useEffect, useState } from 'react';
import style from './Products.module.css';
import Product from '../product/Product';
import { toast } from 'react-toastify';
import SplashScreen from '../splashScreen/SplashScreen';

function Products() {
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(100);
  const [loading, setLoading] = useState(false);
  const batch = 12;
  //   console.log(list);
  error && console.log(error);
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
      } catch (e) {
        console.error(e.message);
        toast.error(e.message);
        setError(e.message);
      } finally {
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
      <div className={style.productList}>
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
