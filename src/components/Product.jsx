import React from "react";


const Product = (props) => {
 

  return (
    <ul id="product-item" className="products-list-head">
      <li>
        <img id="list-product-image" className="pizza-photo" alt="" src={props.photo} />{" "}
      </li>
  <li id="list-product-title">{props.title}</li>
     <li id="list-product-id">{props.id}</li>
  <li id="list-product-price">{props.price}</li>
      <li className="actions">
        <button className="contained">Delete</button>
        <button className="edit">Edit</button>
      </li>
    </ul>
  );
};
export default Product;