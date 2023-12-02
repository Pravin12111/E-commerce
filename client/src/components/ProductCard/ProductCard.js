import React from "react";
import './productcard.css';

function ProductCard({name,price,description,image}){
    return (
        <div className="product-card">
            <img src={image} alt={`Product: ${name}`} className="product-card-image"/>
            
            <h2>{name}</h2>
            <h3>{price}</h3>
            <p>{description}</p>

            <div className="btn-stack">
            <button className="btn">Buy Now</button>
            <button className="btn">Add To cart</button>
            </div>
        </div>
    )
}

export default ProductCard;