'use strict';

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



const navProductList = document.querySelector('#nav-products-list');
navProductList.addEventListener( "click" , () => window.location.href  = "products-page.html");

const navProductCreate = document.querySelector('#nav-create');
navProductCreate.addEventListener( "click" , () => window.location.href  = "create-product.html");

const navHome = document.querySelector('#nav-home');
navHome.addEventListener( "click" , () => window.location.href  = "home-page.html");




document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
});

async function renderProducts() {
  const productList = document.querySelector('#product-list');
if (productList) {
  const products = await productsApi.getProducts();

  products
  .map(item => new Product(item))
  .forEach((item) => productList.appendChild(item.render()));
}
}

