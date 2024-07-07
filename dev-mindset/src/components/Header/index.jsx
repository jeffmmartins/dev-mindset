import logoImg from "../../assets/img/logo.png" 
import style from "../Header/header.module.css"

const Header = () => {
  return (
    <div>
      <header id={style.container}>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoImg} alt="" />
            <h1>Dev Mindset</h1>
          </div>
          <div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Trending</a></li>
                <li><a href="">contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
