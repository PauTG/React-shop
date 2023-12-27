import { useNavigate } from "react-router-dom";
import PaymentMessage from "../PaymentMessage/PaymentMessage";
import "./PaymentSection.css";
import creditCard from "./img/creditCard.png";
import { useRef, useState } from "react";

const PaySection = () => {
  const [messages, setMessages] = useState({
    messageCardNumber: false,
    messageName: false,
    messageExpirationDate: false,
    messageCvc: false,
  });

  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [cvcValue, setCvcValue] = useState("");
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  // const [redirect, setRedirect] = useState(false)
  const navigate = useNavigate();

  // referencias a los inputs
  const cardNumberRef = useRef("");
  const nameRef = useRef("");
  const dayRef = useRef("");
  const monthRef = useRef("");
  const cvcRef = useRef("");

  const handleInputCardNumber = () => {
    console.log(cardNumberRef.current.value.length);
    if (cardNumberRef.current.value.length < 16) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        messageCardNumber: true,
      }));
    } else {
      setMessages((prevMessages) => ({
        ...prevMessages,
        messageCardNumber: false,
      }));
    }
  };

  const handleInputName = () => {
    // console.log(nameRef.current.value);
    if (
      nameRef.current.value.length < 8 ||
      !nameRef.current.value.includes(" ") ||
      nameRef.current.value[nameRef.current.value.length] == " " ||
      nameRef.current.value[0] == " "
    ) {
      setMessages((prevMessages) => ({ ...prevMessages, messageName: true }));
    } else {
      setMessages((prevMessages) => ({ ...prevMessages, messageName: false }));
    }
  };

  const handleDay = () => {
    console.log(dayRef.current.value);
    if (dayRef.current.value > 31 || dayRef.current.value < 1) {
      setDayValue("");
      dayRef.current.value = dayValue;
    }
  };

  const handleMonth = () => {
    console.log(monthRef.current.value);
    if (monthRef.current.value > 12 || monthRef.current.value < 1) {
      setMonthValue("");
      monthRef.current.value = monthValue;
    }
  };

  const handleCvc = () => {
    console.log(cvcRef.current.value);
    if (
      cvcRef.current.value > 999 ||
      cvcRef.current.value < 0 ||
      cvcRef.current.value.length > 3
    ) {
      setCvcValue("");
      cvcRef.current.value = cvcValue;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePayment = () => {
    if (
      !messages.messageCardNumber &&
      !messages.messageName &&
      !messages.messageExpirationDate &&
      !messages.messageCvc
    ) {
      setShowPaymentMessage(true);
      setTimeout(() => {
        setShowPaymentMessage(false);
        navigate("/");
      }, 2500);
    }
  };

  return (
    <div className="paySectionContainer">
      <div className="paysection">
        <div className="cardImg">
          <img src={creditCard} alt="#" />
        </div>
        <form onSubmit={handleSubmit} action="#">
          <label htmlFor="cardNumber">Numero de la tarjeta</label>
          <input
            type="number"
            name="cardNumber"
            id="cardNumber"
            ref={cardNumberRef}
            onInput={handleInputCardNumber}
          />
          <p>{messages.messageCardNumber && "Numero Incorrecto."}</p>

          <label htmlFor="name">Nombre del titular</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            onInput={handleInputName}
          />
          <p>{messages.messageName && "Ingrese nombre completo."}</p>
          <div className="expirationDate">
            <label>Fecha de expiracion</label>
            <div>
              <div className="dateDiv">
                <label htmlFor="expirationMonth">Dia</label>
                <input
                  type="number"
                  name="expirationMonth"
                  id="expirationMonth"
                  ref={dayRef}
                  onInput={handleDay}
                />
              </div>
              <div className="dateDiv">
                <label htmlFor="expirationDay">Mes</label>
                <input
                  type="number"
                  name="expirationDay"
                  id="expirationDay"
                  ref={monthRef}
                  onInput={handleMonth}
                />
              </div>
              <p></p>
            </div>
          </div>

          <label htmlFor="cvc">CVC</label>
          <input
            type="number"
            name="cvc"
            id="cvc"
            ref={cvcRef}
            onInput={handleCvc}
          />
          <p></p>

          <button type="submit" onClick={handlePayment}>
            Finalizar Compra
          </button>
        </form>
      </div>
      {showPaymentMessage && <PaymentMessage />}
    </div>
  );
};

export default PaySection;
