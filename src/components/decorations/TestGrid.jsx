import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <div >
        <center>
        <div style={{boxSizing:'border-box', width:'80%', 
        justifyContent:'center', margin: '5%', padding: '5%',borderRadius: '15px', boxShadow: '0 0 15px #888888'}}>
            <Grid container spacing={3}>
  <Grid item xs="auto">
        <Paper style={{ overflowY: 'auto', maxHeight: '800px', borderRadius:'25px'}}>
          {/* Content of the scrollable grid item */}
          <Item>
    <h1>.................................................</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    </Item>
          {/* ... */}
        </Paper>
    
    
    
  </Grid>
  <Grid item xs={6}>
  <Paper style={{ overflowY: 'auto', maxHeight: '800px' }}>
          {/* Content of the scrollable grid item */}
          <Item>variable width content
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    <h1>hurrr</h1>
    </Item>
          {/* ... */}
        </Paper>
  </Grid>
 
            </Grid>
        </div>
        </center>
    </div>
    

  );
}