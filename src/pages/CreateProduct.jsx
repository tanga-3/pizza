import React, {useState} from "react";
import Navbar from "./../components/Navbar";
import {connect} from 'react-redux';
import {ADD_POST} from "../store/actions/posts";


const CreateProduct = (props) => {
const [title, setTitle] = useState('');
const[description, setDescription] = useState('');
const[price, setPrice] = useState('');
const[photo, setPhoto] = useState('');


const submitHandler = (event) => {
  event.preventDefault();
  let data = {
    title,
    description,
    price,
    pictureUrls: [photo]
  }
  fetch('https://jungle-courses-api.herokuapp.com/api/ng/products/create', {method: "POST", body: JSON.stringify(data), headers: {
    "Content-Type": "application/json"},
  })
  .then(response => response.json())
    .then(data => {
      props.addPost(data);
    })
  };


  return (
    <div className="container">
     <Navbar />
      <div className="content">
        <div className="inner-content create-wrapper">
          <h2>Create a new pizza</h2>
          <form onSubmit={submitHandler} className="create-form">
            <div className="flex-row">
              <label>Pizza name</label>
              <input type="text" name="name"
              onInput={(ev) => setTitle(ev.target.value)}/>
            </div>
            <div className="flex-row">
              <label>Pizza description</label>
              <textarea  onInput={(ev) => setDescription(ev.target.value)} name="description"></textarea>
            </div>
            <div className="flex-row">
              <label>Price in UAH</label>
              <input onInput={(ev) => setPrice(ev.target.value)} type="text" name="price" />
            </div>
            <div className="flex-row">
              <label>Upload photo from URL</label>
              <input onInput={(ev) => setPhoto(ev.target.value)}  type="text" name="picture" />
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
export default connect(
  (state) => ({
    posts: state.posts,
  }),
  (dispatch) => ({
    addPost: (payload) => dispatch({type: ADD_POST, payload})
  })
) (CreateProduct);
