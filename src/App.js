import "./App.css";
import Products from "./Components/products";
import About from "./Components/about";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import React from "react";
import ProductCard from "./Components/Home/home";
/* 
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json)) */

function App() {
  return (
    
    <React.Fragment>
     
    <BrowserRouter>

    <Navbar />
      
      <Routes>

      <Route path='/' element={<ProductCard />}></Route>
      <Route path='/products' element={<Products /> }> </Route>
      <Route path='/about' element={<About />} > </Route>
      
      </Routes>
    
    </BrowserRouter>
    
    </React.Fragment>
    
  );
}

export default App;
