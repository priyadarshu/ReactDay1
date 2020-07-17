import React from "react";

function Product(props) {
  return (
    <div>
      <h3>Product Name:{props.product.name}</h3>
      <p>
        Price:&nbsp;
        {props.product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}
      </p>
      <p>Description:&nbsp;{props.product.description}</p>
      <hr />
    </div>
  );
}

export default Product;
