import React, { useEffect, useState } from "react";
import "./Myorders.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

function Myorders(){

    const [orders,setOrders] = useState([]);

    const fetchorders = async()=>{

        const user = JSON.parse(localStorage.getItem("user"))|| null;
        const response = await axios.get(`/orders?id=${user._id}`);

        setOrders(response.data.data);
    }

    useEffect(()=>{
        fetchorders();
    },[])
    return(
        <>
        <Navbar/>
        <div>
            <h1 className="text-center">My orders</h1>

            {
                orders.map((order,index)=>{

                    const {product,quantity,shippingAddress} = order;
                    return (
                        <div key={index} className="order-card">
                            <div className="img">
                            <img src={product.image} className="img-container"/>
                            </div>
                            <div className="content">
                            <h2>{product.name}</h2>
                            <p>Quantity : {quantity}</p>
                            <p>Price: {product.price}</p>
                            <p>Total Amount: {product.price * quantity}</p>
                            <p>Shipping Address: {shippingAddress}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Myorders;