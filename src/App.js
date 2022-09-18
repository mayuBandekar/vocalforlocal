import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Registration_Form from './components/register/register';
import Productlist from './components/product_listing/ProductList';
import ProductDetails from './components/product_listing/ProductDetails';
import Cart from './components/cart_functionality/Cart';
import ProductListPage from './components/pages/ProductListPage';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import CartPage from './components/pages/CartPage';

function App() {
  return (
      <div>
     
      <Routes>
        {/* <Route exact path='/' component={Login} /> */}
        <Route exact path='/' element={<Registration_Form />} />
        <Route exact path='/login' element={<Login />} />
        
        <Route exact path='/product' element={<Productlist />} />
        <Route exact path='/productDetails/:id' element={<ProductDetails/>} />
        <Route exact path='/cart' element={<Cart />} />


        <Route exact path='/productList' element={<ProductListPage />} />
        <Route exact path='/productDetailsPage/:id' element={<ProductDetailsPage />} />
        <Route exact path='/CartPage' element={<CartPage />} />

      </Routes> 
      </div>
  );
}

export default App;
