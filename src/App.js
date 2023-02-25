import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Contact from "./Contact";
import About from "./Pages/About";
import Home from "./Pages/Home";

import Products from "./Pages/Products";
import SingleProduct from "./SingleProduct";



const App = () => {
  return (
    <>
      <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/about" element={<About/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/product" element={<Products/>} />
           <Route path="/singleproduct/:id" element={<SingleProduct/>} />
           <Route path="/cart" element={<Cart/>} />
        </Routes>
        

      </Router>
    
    </>
  )
  
};

export default App;
