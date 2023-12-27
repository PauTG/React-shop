/* eslint-disable react/prop-types */
import CartContext from "../../context/CartContext";
import "./CartCards.css";
import { useContext } from "react";

const CartCards = ({ data }) => {
  const { addToCart, removeItemFromCart, finalPrice } = useContext(CartContext);

  return (
    <div className="cartCard">
      <img src={data.image} alt="image" />
      <p>{data.title}</p>
      <div>
        <button
          onClick={() => {
            addToCart(data);
            finalPrice(data.cantidad, data.price, "+");
          }}
        >
          +
        </button>
        <p>x{data.cantidad}</p>
        <button
          onClick={() => {
            removeItemFromCart(data);
            finalPrice(data.cantidad, data.price, "-")
          }}
        >
          -
        </button>
      </div>
      <p>Precio ${(data.price * data.cantidad).toFixed(2)}</p>
    </div>
  );
};

export default CartCards;
