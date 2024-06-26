import React, { useState } from "react";
import './signup.css';
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import showToast from 'crunchy-toast';

function Signup(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [password,setPassword]=useState('');


    const signup = async()=>{
        const response = await axios.post("/signup",{
            name: name,
            email: email,
            mobile: mobile,
            password: password
        })

        if(response.data.success){
            showToast(response.data.message,'success',3000);
            window.location.href ="/Login";
        }
    }


    return(
        <>
        <Navbar/>
        <div className="signup-container">
            <h1 className="signup-title">Signup</h1>

            <div className="input-container">
                <label className="input-label">Name</label>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    className="input-field"
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                />
            </div>

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
                <label className="input-label">Mobile</label>
                <input 
                    type="text"
                    placeholder="Enter your mobile"
                    className="input-field"
                    value={mobile}
                    onChange={(e)=>{
                        setMobile(e.target.value);
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
                        setPassword(e.target.value);
                    }}
                />
            </div>


        <button className="signup-btn" 
                onClick={signup}
        >
            Sign up</button>
        </div>
        </>
    )
}

export default Signup;