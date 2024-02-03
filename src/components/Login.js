import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Login.css";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import YourOtherComponent from './GetUsers'

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'white',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });
function Login(){
  const outerTheme = useTheme();
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const LoginAPI = 'https://graphqlserveryourmedia-production.up.railway.app/auth/login/';
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [passId, SetPassId] = useState("");
    const [rgstSuccess, SetRgstSuccess] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


    const LoginUser=async()=>{
        try{
            const LoggedIn = await axios.post(LoginAPI,{
                email: email,
                password: password,
            },{ timeout: 2000 })
            axios.defaults.headers.common['Authorization'] = `Bearer ${LoggedIn.data['token']}`
            SetPassId(LoggedIn.data.userId);
            console.log(LoggedIn.data);
            localStorage.setItem('token', LoggedIn.data.token);
            localStorage.setItem('userId', LoggedIn.data.userId);
            localStorage.setItem('username', LoggedIn.data.username);
            //await new Promise((resolve) => setTimeout(resolve, 3000));
            navigate("/Feed");
        }
        catch{
            SetRgstSuccess("Invalid Credentials!")
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
          <h2 className="heading">Login</h2>
          <div className="input" style={{ marginTop: '5%' , marginBottom: '5%'}}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
            InputProps={{
              style: { borderColor: 'white' },
            }}
            sx={{ input: { color: '#ffffff' }}}
            InputLabelProps={{ style:{color: 'white'} }}
            required
              className="email"
              id="outlined-email-input"
              label="Email"
              type="email"
              value={email}
              
              
              onChange={(e)=>{SetEmail(e.target.value)}}
            />
            <i className='bx bxs-user'></i>
            <TextField
            
            sx={{ input: { color: '#ffffff' } }}
              
              className="password"
              id="outlined-password-input"
              label="Password"
              type="password"
              InputLabelProps={{ style:{color: 'white'} }}
              autoComplete="current-password"
              value={password}
              required
              onChange={(e)=>{SetPassword(e.target.value)}}
            />
            </ThemeProvider>
          </div>
          <b style={{color: 'red'}}>{rgstSuccess}</b>
          <Button color="primary" variant="outlined" onClick={LoginUser}>Login</Button>
          <p className="register">Don't have an account?<span><a href="/register" className="span">Register here</a></span></p>
        </center>
        
      </Box>
      
)
}

export default Login