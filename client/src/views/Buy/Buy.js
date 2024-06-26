import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import checkLogin from "../../utils/Auth";
import axios from "axios";
import "./Buy.css";
import Navbar from "../../components/Navbar/Navbar";
import showToast from 'crunchy-toast';

export default function Buy(){
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const [user,setUser] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [shippingAddress,setShippingAddress] = useState('');

    const loadProduct = async()=>{

        if(!id){
            window.location.href = "/";
        }
        const response = await axios.get(`/product/${id}`)

        setProduct(response.data.data);
    };

    const increase = async()=>{
        setQuantity(quantity+1);
    }

    const decrease =async()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }
    useEffect(()=>{
        checkLogin();
        loadProduct();
        const user = JSON.parse(localStorage.getItem("user"))||null;
        setUser(user);
    },[]);


    const placeorder =async()=>{
        const response = await axios.post("/order",{
            product:product,
            user:user._id,
            quantity:quantity,
            shippingAddress:shippingAddress,
        })

        showToast(response.data.message,'success',5000);
        window.location.href = "/orders"
    }
    return(
        <>
        <Navbar/>
        <div className="buy-container">
            <img src={product.image} alt={product.name} className="buy-product-img"/>
            <div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h1>{product.price}</h1>

            <div className="qt-container">
                <span className="quantity-btn" onClick={decrease}>-</span>
                <span className="quantity-text">{quantity} </span>
                <span className="quantity-btn" onClick={increase}>+</span>
            </div>

            <input type="text"
                placeholder="shippingAddress"
                className="shippingAddress"
                value={shippingAddress}
                onChange={(e)=>{
                    setShippingAddress(e.target.value);
                }}
                />

                <button className="Buy-btn" type="button" onClick={placeorder}>PlaceOrder</button>
            </div>
        </div>
        </>
    )
}