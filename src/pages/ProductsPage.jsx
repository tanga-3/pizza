import React, { useEffect } from "react";
import Navbar from "./../components/Navbar";
import Product from "./../components/Product";
import { connect } from "react-redux";
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_COMPLETED,
  FETCH_POSTS_START,
} from "../store/actions/posts";
import { useAuthorization } from "../hooks/useAuthorization";

const ProductsPage = (props) => {
  useAuthorization(false);

  useEffect(() => {
    props.fetchStart();
    fetch("https://jungle-courses-api.herokuapp.com/api/ng/products")
      .then((response) => response.json())
      .then((data) => {
        props.fetchComplete(data);
      })
      .catch((error) => props.fetchError(error));
    return () => {};
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="inner-content">
          <ul className="products-list-head">
            <li>Photo</li>
            <li>Product Name</li>
            <li>Pizza diameter</li>
            <li>Price</li>
            <li>Actions</li>
          </ul>
        </div>
        {props.posts.data.map((post) => {
          return (
            <Product
              key={post._id}
              title={post.title}
              photo={post.pictureUrls[0]}
              price={post.price}
              id={post._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    posts: state.posts,
  }),
  (dispatch) => ({
    fetchStart: () => dispatch({ type: FETCH_POSTS_START }),
    fetchComplete: (payload) =>
      dispatch({ type: FETCH_POSTS_COMPLETED, payload }),
    fetchError: (payload) => dispatch({ type: FETCH_POSTS_ERROR, payload }),
  })
)(ProductsPage);
