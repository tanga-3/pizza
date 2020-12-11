import React from 'react';
 import './../home.css';



const Home = () => {

const form = document.querySelector('#login-form');
const title = document.querySelector('#login-title');
const tryAgain = document.querySelector('#try-again');
const creds = {login: 'admin', password: "password"};
const removeTitle = () => title.parentElement.removeChild(title);
const showTryAgain = () => tryAgain.style.display = 'block';

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const login = event.target.elements.login.value;
        const password = event.target.elements.password.value;

     if (login === creds.login && password === creds.password) {
      window.location.href  = "products-page.html";
      localStorage.setItem("user", JSON.stringify({login: login}))
   } else
   { 
     removeTitle();
     showTryAgain();
   }
    })
}
  return (
    <div class="container">
    <div class="homeImage"></div>
    <div class="rightPanel">
     <div class="rightPanelInnerContainer">
      <form id ="login-form">
        <h1 id="login-title">Login</h1>
        <h2 id="try-again" class="try">The email or password is incorrect, <br/> try again, please</h2>
        <input type="text" class="login" name="login" placeholder="Username"/>
        <input type="password" class="password" name="password" placeholder="Password"/>
        <button type="submit" class="contained login">LOGIN</button>
      </form>
    </div>
  </div>
  </div>
  );
}

export default Home;


