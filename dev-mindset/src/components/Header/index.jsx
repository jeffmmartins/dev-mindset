import logoImg from "../../assets/img/logo.png" 
import style from "../Header/header.module.css"

const Header = () => {
  return (
    <div>
      <header id={style.container}>
        <nav id={style.navbar}>
          <div className={style.navBrand}>
            <img src={logoImg} alt="logo" style={{width: '30px', height: '30px'}} />
            <h1>Dev Mindset</h1>
          </div>
          <div>
            <ul className={style.list}>
                <li><a href="" className={style.link}>Home</a></li>
                <li><a href="" className={style.link}>About</a></li>
                <li><a href="" className={style.link}>Trending</a></li>
                <li><a href="" className={style.link}>contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
