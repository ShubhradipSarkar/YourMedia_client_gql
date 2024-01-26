import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RecipeReviewCard from './Card';

export default function FormPropsTextFields() {
  return (
    
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <center>
      <div style={{ marginTop: '25%' }}>
        
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        
      </div>
     
      </center>
      
    </Box>
    <div>
      
    </div>
    <RecipeReviewCard/>
    </div>
  );
}
