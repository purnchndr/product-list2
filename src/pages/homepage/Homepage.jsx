import Header from '../../components/header/Header';
import Posters from '../../components/posters/Posters';
import Products from '../../components/products/Products';
import style from './Homepage.module.css';

function Homepage() {
  return (
    <div className={style.homepage}>
      <Header />
      <Posters />
      <Products />
    </div>
  );
}

export default Homepage;
