import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Counter from '../Counter/Counter';





export const ProductCard = ({itemNuevo}) => {
    const navigate = useNavigate();
    const [isFinished, setIsFinished] = useState(false)

    const handleClickButton = () => {
        navigate(`/products/${itemNuevo.id}`)
    }
    
    return (

    <li className="card" >
        
        <h2 className="title">{itemNuevo.title}</h2>
            <div className="img">
            <img src={itemNuevo.image} alt="productos"></img>
            </div>
         {!isFinished  && <button className="button" onClick={handleClickButton}> Details</button> }   
        
        <Counter setIsFinished={setIsFinished}/>

    </li>
    )
}
