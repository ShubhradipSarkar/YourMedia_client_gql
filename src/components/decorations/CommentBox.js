import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../GraphQL/Mutations';

export default function CommentBox({post_id}) {
  const [comment, SetComment] = useState("");
  const userId = localStorage.getItem('userId');
  const [addComment, { loading, error }] = useMutation(ADD_COMMENT);
  const AddComment = async() => {
    try {
        const cmmnt = await addComment({
          variables: { commented_by: userId, comment: comment, post_id: post_id},
        });
        console.log("commented hihi");
        SetComment("")
        //window.location.reload();
      } catch (error) {
        
      }
  }
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Comment on post..." variant="standard" 
        value={comment} onChange={(e)=>{SetComment(e.target.value)}}/>
        <Button onClick={AddComment}><SendOutlinedIcon/></Button>
      </Box>
    </Box>
  );
}