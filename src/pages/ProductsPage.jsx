import React, { useEffect } from "react";
import Navbar from "./../components/Navbar";
import Product from  "./../components/Product";
import {connect} from 'react-redux';
import { FETCH_POSTS_ERROR, FETCH_POSTS_COMPLETED, FETCH_POSTS_START } from "../store/actions/posts";


const ProductsPage = (props) => {
 useEffect(() => {
   props.fetchStart();
   fetch('https://jungle-courses-api.herokuapp.com/api/ng/products')
   .then(response => response.json())
   .then(data => {
    props.fetchComplete(data);
   })
   .catch(error => props.fetchError(error));
   return () => {}
   
 }, [])


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
          {props.posts.data.map(post => {
        return  <Product title={post.title} photo={post.pictureUrls[0]} price={post.price}/>   
            })}
                  
        </div>
    </div>
    </div>
    )};

    export default connect(
      (state) => ({
        posts: state.posts
      }),
      (dispatch) => ({
        fetchStart: () => dispatch({type: FETCH_POSTS_START}),
        fetchComplete: (payload) => dispatch({type: FETCH_POSTS_COMPLETED}),
        fetchError: (payload) => dispatch({type: FETCH_POSTS_ERROR, payload}),
      })
    )(ProductsPage);

