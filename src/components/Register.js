import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const RegisterAPI = 'https://graphqlserveryourmedia-production.up.railway.app/auth/register/';
    const navigate = useNavigate();

    const RegisterUser=async()=>{
        try{
            const Registered = await axios.post(RegisterAPI,{
                password: password,
                username: name,
                email: email,
            }).then(()=>{console.log("User Registered"); navigate("/Login")})
            .catch((err)=>{console.log("Couldn't register user", err.msg)});
        }
        catch(error){
            console.log("Unknown Server Error, Try Later");
        }
    };

    return(
        <div>
            <center><h1>Register Here</h1></center>
            <input type="name" value={name} placeholder="Enter Name" onChange={(e)=>{SetName(e.target.value)}}/>
            <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>{SetEmail(e.target.value)}}/>
            <input type="password" value={password} placeholder="Enter Password" onChange={(e)=>{SetPassword(e.target.value)}}/>
            <button onClick={RegisterUser}>Register User</button>
        </div>
    )
}

export default Register