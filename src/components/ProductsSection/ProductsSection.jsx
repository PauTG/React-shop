/* eslint-disable react/prop-types */
import "./ProductsSection.css";
import Card from "../Card/Card";

const ProductsSection = ({ datos }) => {
  // console.log(datos);

  return (
    <>
      <div className="productSection">
        {datos.map((producto) => 
          <Card key={`id-producto-${producto.id}`} data={producto}/>
        )}
      </div>
      <div>
          {/* <Cart/> */}
      </div>
    </>
  );
};

export default ProductsSection;
