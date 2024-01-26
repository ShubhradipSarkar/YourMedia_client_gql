import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { deepOrange } from '@mui/material/colors';
import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../GraphQL/Mutations';
import { Button } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function InputWithIcon() {
    const [thought, SetThought] = React.useState("");
    const userId = localStorage.getItem('userId').toString();
    const time = Date.now().toString();
    const [addPost, { loading, error }] = useMutation(ADD_POST);

    const AddPost = async() => {
        try {
            
            const result = await addPost({
              variables: { user: userId, message: thought, createdAt: time},
            });
            console.log("posted");
          } catch (error) {
            
          }
    }

    return (
        <Box sx={{ '& > :not(style)': {margin: 'auto', width: '50%' }, my: 2}}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: `${deepOrange}`, mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Post your thoughts" variant="standard"
                value={thought} onChange={(e)=>{SetThought(e.target.value)}}/>
                <Button onClick={AddPost}><SendOutlinedIcon/></Button>
            </Box>
        </Box>
    );
}