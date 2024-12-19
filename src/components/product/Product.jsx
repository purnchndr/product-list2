import { Link } from 'react-router-dom';
import style from './Product.module.css';

function Product({ data }) {
  return (
    <div className={style.product}>
      <Link to={`/${data.id}`}>
        <div className={style.image}>
          <img src={data.thumbnail} alt={data.title} />
        </div>
        <div className={style.data}>
          <p className={style.title}>{data.title}</p>
          <div className={style.data2}>
            <p className={style.price}>${data.price}</p>
            <p className={style.rating}>⭐ {data.rating}</p>
          </div>
        </div>
      </Link>
      <div className={style.btn}>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
