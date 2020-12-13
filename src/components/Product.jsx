import React from "react";


const Product = () => {
 

  return (
    <ul id="product-item" className="products-list-head">
      <li>
        <img id="list-product-image" className="pizza-photo" alt="" src="" />{" "}
      </li>
      <li id="list-product-title"></li>
      <li id="list-product-id"></li>
      <li id="list-product-price"></li>
      <li className="actions">
        <button className="contained">Delete</button>
        <button className="edit">Edit</button>
      </li>
    </ul>
  );
};
export default Product;
