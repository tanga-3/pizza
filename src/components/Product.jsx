import React from "react";
import {connect} from 'react-redux';
import {REMOVE_POST} from "../store/actions/posts";


const Product = (props) => {
  const handleDelete = (event) => {
    event.preventDefault();
 
  fetch('https://jungle-courses-api.herokuapp.com/api/ng/products/' + props.id, {method: "DELETE"})
 
      .then(data => {
        props.removePost(props.id);
      })
  };
  return (
    <ul id="product-item" className="products-list-head">
      <li>
        <img id="list-product-image" className="pizza-photo" alt="" src={props.photo} />{" "}
      </li>
  <li id="list-product-title">{props.title}</li>
     <li id="list-product-id">{props.id}</li>
  <li id="list-product-price">{props.price}</li>
      <li className="actions">
        <button onClick={handleDelete} className="contained">Delete</button>
        <button className="edit">Edit</button>
      </li>
    </ul>
  );
};
export default connect((state) => ({
  posts: state.posts
}),
  (dispatch) => ({
    removePost: (payload) => dispatch({type: REMOVE_POST, payload})
  })
) (Product);