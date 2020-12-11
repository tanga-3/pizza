import React from "react";

const ProductsPage = () => {
  return (
    <div class="container">
      <div class="navbar">
        <ul class="navbar-items">
          <li><img class="logo" alt="" src="assets/images/logo.png" /> </li>
          <li id="nav-products-list" class="list">Products List</li>
          <li id="nav-create" class="add">Add a new product</li>
          <li id="nav-home" class="log-out">Log out</li>
        </ul>
      </div>
      <div class="content">
        <div class="inner-content">
          <ul class="products-list-head">
            <li>Photo</li>
            <li>Product Name</li>
            <li>Product ID</li>
            <li>Price</li>
            <li>Actions</li>
          </ul>
        </div> 
        <div id="product-list">
          {/* <ul id="product-item" class="products-list-head">
            <li><img id="list-product-image" class="pizza-photo" alt="" src="" /> </li>
            <li id="list-product-title"></li>
            <li id="list-product-id"></li>
            <li id="list-product-price"></li>
            <li class="actions">
              <Button class="contained">Delete</Button>
              <Button class="edit">Edit</Button>
            </li>
          </ul>  */}
        </div>
    </div>
    </div>
    )};
    export default ProductsPage;

