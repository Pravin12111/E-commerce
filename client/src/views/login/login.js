import React, { useState } from "react";
import './login.css';
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import ShowToast from 'crunchy-toast';

function Login(){

    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('');
    

    const login = async()=>{
        const response =await axios.post("/login",{
            email:email,
            password:password
        })

        ShowToast(response.data.message,'Success',5000);

        if(response.data.success){
            localStorage.setItem("user",JSON.stringify(response.data.data));
            window.location.href ="/"
        }
    }
    return(
        <>
        <Navbar/>
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <div className="input-container">
                <label className="input-label">Email</label>
                <input 
                    type="email"
                    placeholder="Enter your Email"
                    className="input-field"
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                />
            </div>

            <div className="input-container">
                <label className="input-label">Password</label>
                <input 
                    type="password"
                    placeholder="Enter your Password"
                    className="input-field"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                />
            </div>
            <button className="login-btn" onClick={login}>
            Login</button>
        </div>
        </>
    )
}


export default Login
