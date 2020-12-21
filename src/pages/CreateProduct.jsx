import React, {useState} from "react";
import Navbar from "./../components/Navbar";
import {connect} from 'react-redux';
import {  ADD_POST  } 
  from "../store/actions/posts";


const CreateProduct = (props) => {
const [title, setTitle] = useState('');
const[body, setBody] = useState('');
const submitHandler = (event) => {
  event.preventDefault();
  props.addPost({title, body, id: 1000})
}

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
              <textarea  onInput={(ev) => setBody(ev.target.value)} name="description"></textarea>
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
export default connect(
  () => ({}),
  (dispach) => ({
    addPost: (payload) => dispatchEvent({type: ADD_POST, payload})
  })
) (CreateProduct);
