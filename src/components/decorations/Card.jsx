import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import { useMutation } from '@apollo/client';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';
import { ADD_FRIEND_MUTATION } from '../../GraphQL/Mutations';


export default function RecipeReviewCard(props) {
    const [buttonText, SetButtonText] = React.useState(props.buttonText);
    const [removeButton, SetRemoveButton] = React.useState('Remove-');
    const friend = props.id;
    const [addFriend, { loading, error }] = useMutation(ADD_FRIEND_MUTATION);
    const AddFriend = async() => {
        try {
            console.log(props.id);
            const result = await addFriend({
              variables: { user: localStorage.getItem('userId') , friend: friend },
            });
      
            SetButtonText(props.buttonTextAfterAction);
            if (props.reloadPage==="1") {
                window.location.reload();
              }
            
          } catch (error) {
            SetButtonText("Couldn't add as friend");
        }
    }
    const RemoveItem = async() => {
        SetRemoveButton("Feature comming soon")
    }
  return (
    <div style={{marginTop: '75px'}}>
      <Card sx={{ maxWidth: '75%', margin: '7%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           <b>{props.username[0]}</b> 
          </Avatar>
        }
        
        title=<b>{props.username}</b>
        subheader={props.school}
      />
      <CardActions disableSpacing>
        
        <Button variant="contained" onClick={AddFriend} style={{margin:'3%' ,width:'100px',height:'37px',  background: 'linear-gradient(to right bottom, #121858, #121858)'}}>{buttonText}</Button>
        <Button variant="contained" onClick={RemoveItem} style={{background: 'linear-gradient(to right bottom, #c51162, #c51162)'}}>{removeButton}</Button>
      </CardActions>
      
    </Card>
    </div>
    
  );
}
