import "./Header.css";
import ShopCartLogo from "./img/Untitled_design-removebg-preview-modified.png"

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div>
          <div className="logo">
            {/* <i className="fa-solid fa-shop"></i> */}
            <img src={ShopCartLogo} alt={<i className="fa-solid fa-shop"></i>}/>
          </div>
          <div className="ingresar">
            <p>Log in</p>
          </div>
        </div>

        <ul>
          <Link to="/">
            <li>Catalogo</li>
          </Link>


          <Link to="/aboutus">
            <li>Nosotros</li>
          </Link>
          <Link to="/cart">
            <li><i className="fa-solid fa-cart-shopping"></i>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
