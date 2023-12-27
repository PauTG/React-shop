import "./Cart.css";
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
              Carrito <i className="fa-solid fa-cart-shopping"></i>
            </h3>
            <p>Monto total ${totalPrice.toFixed(2)}</p>
            <button className="clearCartBtn" onClick={clearCart}>Vaciar Carrito</button>
            <button className="buyBtn"><Link to="/pay">Finalizar compra</Link></button>
          </div>
          {cart.map((item) => (
            <CartCard key={`iqtemId-${item.id}`} data={item} />
          ))}
        </div>
      </>
  );
};

export default Cart;
