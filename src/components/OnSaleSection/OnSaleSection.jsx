/* eslint-disable react/prop-types */
import "./OnSaleSection.css";
import Card from "../Card/Card";

// eslint-disable-next-line react/prop-types
const OnSaleSection = ({ datos }) => {
  return (
    <>
      <div className="productSection">
        {datos.map((producto) => {
          if (producto.price < 15) {
           return <Card key={`id-producto-${producto.id}`} data={producto} />;
          }
        })}
      </div>
      <div>{/* <Cart/> */}</div>
    </>
  );
};

export default OnSaleSection;
