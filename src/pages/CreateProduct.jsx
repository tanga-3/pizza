import React from "react";

const CreateProduct = () => {
  return (
    <div class="container">
      <div class="navbar">
        <ul class="navbar-items">
          <li>
            <img class="logo" alt="" src="assets/images/logo.png" />{" "}
          </li>
          <li id="nav-products-list" class="list">
            Products List
          </li>
          <li id="nav-create" class="add">
            Add a new product
          </li>
          <li id="nav-home" class="log-out">
            Log out
          </li>
        </ul>
      </div>
      <div class="content">
        <div class="inner-content create-wrapper">
          <h2>Create a new pizza</h2>
          <form class="create-form">
            <div class="flex-row">
              <label>Pizza name</label>
              <input type="text" name="name" />
            </div>
            <div class="flex-row">
              <label>Pizza description</label>
              <textarea name="description"></textarea>
            </div>
            <div class="flex-row">
              <label>Diameter</label>
              <select name="diameter">
                <option>25 cm</option>
                <option>35 cm</option>
              </select>
            </div>
            <div class="flex-row">
              <label>Price in UAH</label>
              <input type="number" name="price" />
            </div>
            <div class="flex-row">
              <label>Upload photo from URL</label>
              <input type="text" name="picture" />
            </div>
            <div class="flex-row add-product">
              <button type="submit" class="contained">
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreateProduct;
