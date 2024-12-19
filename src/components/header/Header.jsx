import { Link, NavLink } from 'react-router-dom';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <Link to='/' className={style.logo}>
        <img src='./img/logo.png' alt='logo' />
      </Link>
      <div className={style.navlinks}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/categories'>Categories</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      <div className={style.side}>
        <img src='./img/bag.png' alt='cart' />
        <img src='./img/user.png' alt='profile' />
      </div>
    </header>
  );
}

export default Header;
