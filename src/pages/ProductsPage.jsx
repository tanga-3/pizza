import React from "react";
import Navbar from "./../components/Navbar";
import Product from  "./../components/Product";

const ProductsPage = () => {
  
  return (
    <div className="container">
     <Navbar />
      <div className="content">
        <div className="inner-content">
          <ul className="products-list-head">
            <li>Photo</li>
            <li>Product Name</li>
            <li>Product ID</li>
            <li>Price</li>
            <li>Actions</li>
          </ul>
        </div> 
        <div id="product-list">

          <Product />
        </div>
    </div>
    </div>
    )};
    export default ProductsPage;

