import "./Header.css";
import ShopCartLogo from "./img/ShopCartLogo.png"

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div>
          <div className="logo">
            {/* <i className="fa-solid fa-shop"></i> */}
            <img src={ShopCartLogo} alt={<i className="fa-solid fa-shop"></i>}/>
            <p>ShopCart</p>
          </div>
          <div className="ingresar">
            <p>Iniciar Sesion</p>
          </div>
        </div>

        <ul>
          <Link to="/">
            <li>Productos</li>
          </Link>

          <Link to="/sale">
            <li>Sale</li>
          </Link>

          <Link to="/aboutus">
            <li>Quienes somos</li>
          </Link>

          <Link to="/cart">
            <li>
              Carrito <i className="fa-solid fa-cart-shopping"></i>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
