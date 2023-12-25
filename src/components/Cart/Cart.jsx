import "./Cart.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import CartCard from "../CartCards/CartCards";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  let { totalPrice, clearCart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
      <>
        <div className="cartDiv">
          <div>
            <h3>
              Carrito <FontAwesomeIcon icon={faCartShopping} />
            </h3>
            <p>Monto total ${totalPrice.toFixed(2)}</p>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button><Link to="/pay">Finalizar compra</Link></button>
          </div>
          {cart.map((item) => (
            <CartCard key={`iqtemId-${item.id}`} data={item} />
          ))}
        </div>
        {/* <Routes>
          <Route path="/pay/*" element={<PaySection/>}/>
        </Routes> */}
      </>
  );
};

export default Cart;
