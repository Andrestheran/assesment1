import React, { useEffect, useState } from "react";
import './home.css';


export default function ProductCard( ) {
    const [items,setItems] = useState([]);
    useEffect(() => {
        fetchAPI();
    },[])
    

    const fetchAPI = async() => {


        const data = await fetch('https://fakestoreapi.com/products?limit=9');
        const list = await data.json();
        setItems(list);
        console.log(list);
    }
    return(
        <div className="container">
           <h1 className="header">Productos</h1>
           <ul className="ul">

           {items.map((item) => (
              <li className="list" key={item.id}>
                   <h2 className="title">{item.title}</h2>
                    <div className="img">
                    <img src={item.image} alt="productos"></img>
                    </div>
                   <button className="button"> Details</button>

               </li> 
           ))}

           </ul> 
        </div>
    )
    }
