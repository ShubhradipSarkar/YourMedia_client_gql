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
function Register(){
    const outerTheme = useTheme();
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const RegisterAPI = 'https://graphql-server-yourmedia.onrender.com/app/auth/register/';
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [focused, setFocused] = useState(false);
    const [rgstSuccess, SetRgstSuccess] = useState("");
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
            .catch((err)=>{console.log("Couldn't register user", err.msg,

            SetRgstSuccess("Couldn't Register User! Try Later"))});
        }
        catch(error){
            console.log("Unknown Server Error, Try Later");
            SetRgstSuccess("Unknown Network Error! Try Later")
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
        <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField
            id="outlined-name-input"
            label="Name"
            sx={{ input: { color: '#ffffff' }}}
      InputProps={{
        style: {  borderColor:'white' },
      }}
      InputLabelProps={{ style:{color: 'white'} }}
            required
            type="name"
            value={name}
            onChange={(e)=>{SetName(e.target.value)}}
        />
        <TextField
            id="outlined-email-input"
            label="Email"
            type="email"
            InputLabelProps={{ style:{color: 'white'} }}
            required
            sx={{ input: { color: '#ffffff' }}}
            value={email}
            onChange={(e)=>{SetEmail(e.target.value)}}
        />
        <TextField
            id="outlined-password-input"
            label="Password"
            InputLabelProps={{ style:{color: 'white'} }}
            required
            type="password"
            InputProps={{
                style: {
                  borderColor: focused ? 'blue' : 'white',
                },
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            sx={{ input: { color: '#ffffff' }}}
            autoComplete="current-password"
            value={password}
            onChange={(e)=>{SetPassword(e.target.value)}}
        />
        </ThemeProvider>
        </div>
        <b style={{color: 'red'}}>{rgstSuccess}</b>
        <Button color="primary" variant="outlined" onClick={RegisterUser}>Register</Button>
        <p className="register">Already have an account?<span><a href="/" className="span">Login here</a></span></p>
        </center>

        </Box>
    )
}

export default Register