import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

export const ProductDetail = () => {

    const {productId}= useParams();
    const [product, setProduct] = useState({});
    const {id,title,description,image,category,price,rating} = product;

    
    useEffect(() => {
        fetchAPI()
    },[productId])  

    const fetchAPI = async() => {

        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const json = await data.json();
        setProduct(json);
        
    }
    console.log(product);

      

    
    if (!product.title){
        return <h1>Loading...</h1>
    }
    
    return (
        <div className='container'>
           <p className='id'>ID{id}</p>
           <p className='titulo'>{title}</p>
           <img className='image' src={image} alt='img'></img>
           <p className='description'>{description}</p> 
           <br></br>
           <p className='price'>$ {price}</p>
           <br></br>
           
           <br></br>
           <p className='category'>{category}</p>   
        </div>
    )
}
