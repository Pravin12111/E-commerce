import React from "react";
import './productcard.css';
import {Link} from 'react-router-dom';
import ShowToast from'crunchy-toast';

function ProductCard({id,name,price,description,image}){

    return (
        <div className="product-card">
            <img src={image} alt={`Product: ${name}`} className="product-card-image"/>
            
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{description}</p>

            <div className="btn-stack">
            <Link className="btn" type="button" to={`/buy/${id}`}>Buy Now</Link>
            <Link className="btn" type="button" to={`/buy/${id}`}>Add To cart</Link>
            </div>
        </div>
    )
}

export default ProductCard;