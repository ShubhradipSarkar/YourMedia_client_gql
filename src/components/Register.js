import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Register(){
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const RegisterAPI = 'https://graphqlserveryourmedia-production.up.railway.app/auth/register/';
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    const RegisterUser=async()=>{
        try{
            const Registered = await axios.post(RegisterAPI,{
                password: password,
                username: name,
                email: email,
            }).then(()=>{console.log("User Registered"); navigate("/")})
            .catch((err)=>{console.log("Couldn't register user", err.msg)});
        }
        catch(error){
            console.log("Unknown Server Error, Try Later");
        }
    };

    return(
        
        <Box
        className="box"
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <center className="center">
        <h2 className="heading">Register</h2>
        <div className="input" style={{ marginTop: '5%' , marginBottom: '5%'}}>
        <TextField
            id="outlined-name-input"
            label="Name"
            
      InputProps={{
        style: { color: 'blue', borderBottomColor: 'blue' },
      }}
            type="name"
            value={name}
            onChange={(e)=>{SetName(e.target.value)}}
        />
        <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            value={email}
            onChange={(e)=>{SetEmail(e.target.value)}}
        />
        <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e)=>{SetPassword(e.target.value)}}
        />
        
        </div>
        <Button color="primary" variant="outlined" onClick={RegisterUser}>Register</Button>
        <p className="register">Already have an account?<span><a href="/" className="span">Login here</a></span></p>
        </center>

        </Box>
    )
}

export default Register