import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css";
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
        
      <Box className="box"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <center className="center">
          <h1 className="heading">Log In</h1>
          <div className="input" style={{ marginTop: '5%' }}>
            
            <TextField
              className="email"
              id="outlined-email-input"
              label="email"
              type="email"
              value={email}
              onChange={(e)=>{SetEmail(e.target.value)}}
            />
            <i class='bx bxs-user'></i>
            <TextField
              className="password"
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e)=>{SetPassword(e.target.value)}}
            />
            
          </div>
          <Button className="btn" variant="outlined" onClick={LoginUser}>Login</Button>
          <p className="register">Don't have an account?<span><a href="/register" className="span">Register here</a></span></p>
        </center>
        
      </Box>
      
)
}

export default Login