import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import CreateProduct from "./pages/CreateProduct";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/create">
        <CreateProduct />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
