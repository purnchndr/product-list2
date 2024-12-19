import Header from '../../components/header/Header';
import Posters from '../../components/posters/Posters';
import Products from '../../components/products/Products';
import style from './Homepage.module.css';

function Homepage({ list, setList, skip, setSkip, cardClick }) {
  return (
    <div className={style.homepage}>
      <Header />
      <Posters />
      <Products
        cardClick={cardClick}
        list={list}
        setList={setList}
        skip={skip}
        setSkip={setSkip}
      />
    </div>
  );
}

export default Homepage;
