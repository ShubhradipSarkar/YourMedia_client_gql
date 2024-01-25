import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const LoginAPI = 'https://graphqlserveryourmedia-production.up.railway.app/auth/login/';
    const navigate = useNavigate();

    const LoginUser=async()=>{
        try{
            const LoggedIn = await axios.post(LoginAPI,{
                email: email,
                password: password,
            })
            axios.defaults.headers.common['Authorization'] = `Bearer ${LoggedIn.data['token']}`
            console.log(LoggedIn.data);
            localStorage.setItem('token', LoggedIn.data.token);
            localStorage.setItem('userId', LoggedIn.data.userId);
            localStorage.setItem('username', LoggedIn.data.username);
            navigate("/Home");
        }
        catch{
            console.log('Unknown Network Error');
        }
    }

    return(
        <div>
            <center><h1>Login Here</h1></center>
            <input type="email" value={email} placeholder="Enter Email" onChange={(e)=>{SetEmail(e.target.value)}}/>
            <input type="password" value={password} placeholder="Enter Password" onChange={(e)=>{SetPassword(e.target.value)}}/>
            <button onClick={LoginUser}>Login</button>
        </div>
    )
}

export default Login