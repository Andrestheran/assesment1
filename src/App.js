import "./App.css";
import Products from "./Components/products";
import About from "./Components/about";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import React from "react";
import  { Home } from "./Components/Home/home";
import { ProductDetail } from "./Components/ProductDetail/ProductDetail";




function App() {
  return (
    
    <React.Fragment>
     
    <BrowserRouter>

    <Navbar />
      
      <Routes>

      <Route path='/' element={<Home />}></Route>
      <Route path='/products' element={<Products /> }> </Route>
      <Route path='/products/:productId' element={<ProductDetail/>}></Route>
      <Route path='/about' element={<About />} > </Route>
      
      </Routes>
    
    </BrowserRouter>
    
    </React.Fragment>
    
  );
}

export default App;
