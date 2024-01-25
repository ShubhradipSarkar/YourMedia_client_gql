import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import client from '../../Apollo';

export default function RecipeReviewCard(props) {
    const [buttonText, SetButtonText] = React.useState('Add Friend');
    const AddFriend = () => {
        SetButtonText("Chutiya akhono feature deoua hoini...");
    }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.username}
        subheader="September 14, 2016"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.school}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant="contained" onClick={AddFriend}>{buttonText}</Button>
      </CardActions>
      
    </Card>
  );
}
