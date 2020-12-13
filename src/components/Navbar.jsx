import React from "react";
import Image from "./../assets/images/logo.png";

import { useHistory } from "react-router-dom";

const Navbar = () => {
    
  const history = useHistory();
  const navigateTo = (path) => {
       history.push(path);
      };


 return (
  
<div className="navbar">
<ul className="navbar-items">
  <li><img className="logo" alt="" src={Image} /> </li>
  <li onClick={() => navigateTo("/products")} id="nav-products-list" className="list">Products List</li>
  <li onClick={() => navigateTo("/create")} id="nav-create" className="add">Add a new product</li>
  <li onClick={() => navigateTo("/")} id="nav-home" className="log-out">Log out</li>
</ul>
</div>

)};
export default Navbar;