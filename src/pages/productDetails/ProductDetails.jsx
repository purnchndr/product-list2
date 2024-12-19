import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import style from './ProductDetails.module.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SplashScreen from '../../components/splashScreen/SplashScreen';

function ProductDetails() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) setError(res.statusText);
        const data = await res.json();
        setData(d => data);
      } catch (e) {
        console.error(e.message);
        setError(e.message);
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [id]);
  console.log(error);
  return (
    <div>
      <Header />
      {loading || !data ? (
        <SplashScreen />
      ) : error ? (
        <h1>
          {' '}
          {error} <Link to='/'> Go To Homepage</Link>
        </h1>
      ) : (
        <Details data={data} />
      )}
    </div>
  );
}

function Details({ data }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className={style.details}>
      <div className={style.leftSide}>
        <div className={style.imgs}>
          <div className={style.thumbImgs}>
            {data.images.map((c, i) => {
              return (
                <img
                  key={i}
                  className={style.thumb}
                  onClick={() => setSelected(i)}
                  onMouseEnter={() => setSelected(i)}
                  src={c}
                  alt={data.title}
                />
              );
            })}
          </div>
          <div>
            <img
              className={style.mainImage}
              src={data.images[selected]}
              alt={data.title}
            />
          </div>
        </div>
        <div className={style.buttons}>
          <button className={style.add}>Add to Cart</button>
          <button className={style.buy}>Buy Now</button>
        </div>
      </div>
      <div className={style.rightSide}>
        <h1>{data.title}</h1>
        <div className={style.price}>
          <p className={style.prices}>${data.price}</p>
          <p>
            {Array.from({ length: data.rating }).map((c, i) => '⭐')}{' '}
            {data.rating}
          </p>
        </div>
        <p>{data.description}</p>
        <h2>User Reviews</h2>

        <div className={style.ratings}>
          {data.reviews.map((d, i) => (
            <Reviews key={i} data={d} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Reviews({ data }) {
  return (
    <div className={style.reviews}>
      <div className={style.nameAndRating}>
        <p className={style.name}>{data.reviewerName}</p>
        <p className={style.userRating}>
          {Array.from({ length: data.rating }).map((c, i) => '⭐')}{' '}
          {data.rating}
        </p>
      </div>
      <p className={style.comment}>{data.comment}</p>
    </div>
  );
}
export default ProductDetails;
