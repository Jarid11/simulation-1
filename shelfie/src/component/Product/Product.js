import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="product">
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <img src={props.img} alt="product" />
      {/* <button
        onClick={() => props.edit(props.id, props.name, props.price, props.img)}
      >
        Edit
      </button> */}
      <button onClick={() => props.deleted(props.id)}>Delete</button>
    </div>
  );
}

export default Product;
