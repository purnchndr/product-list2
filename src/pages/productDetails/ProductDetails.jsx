import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import style from './ProductDetails.module.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SplashScreen from '../../components/splashScreen/SplashScreen';

function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setData(d => data);
      } catch (e) {
        console.error(e.message);
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [id]);

  console.log(data);

  return (
    <div>
      <Header />
      {loading || !data ? <SplashScreen /> : <Details data={data} />}
    </div>
  );
}

function Details({ data }) {
  console.log(data);
  return (
    <div className={style.Details}>
      <div className={style.leftSide}>
        <div>
          <img src={data.images[0]} alt={data.title} />
        </div>
        <div>
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className={style.rightSide}>
        <h1>{data.title}</h1>
        <p>${data.price}</p>
        <p>{data.description}</p>
        <p>⭐{data.rating}</p>
        <div>{data.reviews.map((d, i) => {})}</div>
      </div>
    </div>
  );
}
export default ProductDetails;
