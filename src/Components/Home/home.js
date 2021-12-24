import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
import { ProductCard } from "../Products/ProductCard";


export const Home = () => {
    const [items,setItems] = useState([]);
    
    useEffect(() => {
        fetchAPI();
    },[])
    

    const fetchAPI = async() => {
        const data = await fetch('https://fakestoreapi.com/products?limit=20');
        const list = await data.json();
        setItems(list);
        console.log(list);
    }

    

    return(
        <div className="container">
           <h1 className="header">Productos</h1>
           <ul className="ul">

           {items.map((item) => (
            <ProductCard key={item.id} itemNuevo={item}/>  
           ))}

           </ul> 
        </div>
    )
    }
