import React from "react";
import Navbar from "./../components/Navbar";


const CreateProduct = () => {
  return (
    <div className="container">
     <Navbar />
      <div className="content">
        <div className="inner-content create-wrapper">
          <h2>Create a new pizza</h2>
          <form className="create-form">
            <div className="flex-row">
              <label>Pizza name</label>
              <input type="text" name="name" />
            </div>
            <div className="flex-row">
              <label>Pizza description</label>
              <textarea name="description"></textarea>
            </div>
            <div className="flex-row">
              <label>Diameter</label>
              <select name="diameter">
                <option>25 cm</option>
                <option>35 cm</option>
              </select>
            </div>
            <div className="flex-row">
              <label>Price in UAH</label>
              <input type="text" name="price" />
            </div>
            <div className="flex-row">
              <label>Upload photo from URL</label>
              <input type="text" name="picture" />
            </div>
            <div className="flex-row add-product">
              <button type="submit" className="contained">
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
