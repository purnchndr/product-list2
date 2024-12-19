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
        <NavLink to='/'>Categories</NavLink>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/'>Contact</NavLink>
      </div>
      <div className={style.side}>
        <img src='./img/bag.png' alt='cart' />
        <img src='./img/user.png' alt='profile' />
      </div>
    </header>
  );
}

export default Header;
