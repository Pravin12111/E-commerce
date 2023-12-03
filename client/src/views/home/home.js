import React, { useEffect, useState} from "react";
import './home.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import axios from 'axios';
import checkLogin from "../../utils/Auth";

function Home(){
    const [products,setProducts] = useState([]);

    const loadProducts = async () => {
        try {
            const response = await axios.get('/products');
            setProducts(response?.data?.data || []);
            console.log(response?.data?.data)
        } catch (error) {
            console.error('Error loading products:', error);
        }
    };

    useEffect(()=>{
        checkLogin();
        loadProducts();
    },[])


    return(
    <div> 
        <h1 className="text-center">All Products</h1>

        <div className="product-container">
        {
            products.map((product,index)=>{
                const {_id,name,price,description,image} =product;
                return(
                    <ProductCard key={index} id={_id} name={name} price={price} description={description} image={image}/>
                )
            })
        }
        </div>
    </div>

    
    )
}

export default Home;