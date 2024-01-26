import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useMutation } from '@apollo/client';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import client from '../../Apollo';
import { ADD_FRIEND_MUTATION } from '../../GraphQL/Mutations';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export default function RecipeReviewCard(props) {
    const [buttonText, SetButtonText] = React.useState("Connect+");
    const [removeButton, SetRemoveButton] = React.useState('Remove-');
    const friend = props.id;
    //console.log(props.id);
    const [addFriend, { loading, error }] = useMutation(ADD_FRIEND_MUTATION);
    const AddFriend = async() => {
        
        try {
            console.log(props.id);
            const result = await addFriend({
              variables: { user: localStorage.getItem('userId') , friend: friend },
            });
      
            //console.log('Friend added:', result.data.addFriend);
            SetButtonText("Connecting...");
            // You can handle success logic here
          } catch (error) {
            //console.error('Error adding friend:', error.message);
            SetButtonText("Couldn't add as friend");
            // You can handle error logic here
          }
    }
    const RemoveItem = async() => {
        SetRemoveButton("Feature comming soon")
    }
  return (
    <Card sx={{ maxWidth: '75%', margin: '7%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           <b>{props.username[0]}</b> 
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title=<b>{props.username}</b>
        subheader={props.school}
      />
      
      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.school}
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <Button variant="contained" onClick={AddFriend} style={{margin:'3%' ,width:'100px',height:'37px',  background: 'linear-gradient(to right bottom, #121858, #121858)'}}>{buttonText}</Button>
        <Button variant="contained" onClick={RemoveItem} style={{background: 'linear-gradient(to right bottom, #c51162, #c51162)'}}>{removeButton}</Button>
      </CardActions>
      
    </Card>
  );
}
