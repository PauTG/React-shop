import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import ProductsDropDown from "../Dropdowns/ProductsDropDown/ProductsDropDown";

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="headerContainer">
        <div>
          <div className="logo">
            <FontAwesomeIcon icon={faShop} />
            <p>ShopCart</p>
          </div>
          <div className="ingresar">
            <p>Iniciar Sesion</p>
          </div>
        </div>

        <ul>
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li>Sale</li>
          <li>Quienes somos</li>
          <li>
            <Link to="/Cart">
              Carrito <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
        </ul>
      </div>
      {/* {openProducts && <ProductsDropDown/>} */}
    </>
  );
};

export default Header;
