import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import { pink } from '@mui/material/colors';
import { useMutation } from '@apollo/client';
import client from '../../Apollo';
import { gql } from '@apollo/client';
import { ADD_LIKE, REMOVE_LIKE } from '../../GraphQL/Mutations';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function PostsOnFeed({name, postId, post, time, likes, comments, userLiked}) {
    const [expanded, setExpanded] = React.useState(false);
    const formattedDate = new Date(time).toLocaleString();
    const [likeCount, SetLikeCount] = React.useState(likes);
    const [commentCount, SetCommentCount] = React.useState(comments);
    const [likestate, SetLikeState] = React.useState(1);
    const [glowLiked, SetGlowLiked] = React.useState();
    const userId = localStorage.getItem('userId');

    //console.log("is liked = ",userLiked);

    React.useEffect(()=>{
      if(userLiked){
        SetGlowLiked(pink[500]);
        SetLikeState(-1);
      }
    },[])
    
    //console.log(formattedDate)
    const handleExpandClick = () => {
      
    };
    const [addlike, {loading, error}] = useMutation(ADD_LIKE)
    const [deletelike, {loadingR, errorR}] = useMutation(REMOVE_LIKE)
    const handelLikeClick = async() => {
      SetLikeCount(likeCount+likestate);
      SetGlowLiked()
      //console.log(glowLiked);
      if(likestate===1){
        SetLikeState(-1);
        SetGlowLiked(pink[500])
      }
      else{
        SetLikeState(1);
        SetGlowLiked()
      }
      if(glowLiked===pink[500]){
        try {
            
          const result = await deletelike({
            variables: { post_id: postId, liked_by: userId},
          });
          console.log(result.message);
          //SetThought("")
          //window.location.reload();
        } catch (error) {
          
        }
      }
      else{
        try {
            
          const result = await addlike({
            variables: { post_id: postId, liked_by: userId},
          });
          console.log("Liked");
          //SetThought("")
          //window.location.reload();
        } catch (error) {
          
        }
      }
      
      
    }
  
    return (
        <center>
            <Card sx={{ maxWidth: '80%', margin:'5%' }} style={{ justifyContent: 'center' }}>
        <CardHeader style={{textAlign:'left'}}
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {name[0]+name[1]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={()=>{alert("feature comming soon");console.log("feature comming soon")}}>
              <MoreVertIcon />
            </IconButton>
          }
          title=<b>{name}</b>
          subheader=""
        />
        
        <CardContent style={{background:'linear-gradient(to right bottom, #af3af2, #f73bdb)', color:'#ffffff'}}>
          <Typography variant="body2" color="text.secondary">
            <h2 style={{color: '#ffffff'}}>{post}</h2>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" >
            
            
            <Badge badgeContent={likeCount} color="primary">
            <FavoriteIcon sx={{ color: glowLiked }} onClick={handelLikeClick}/>
            </Badge>
          </IconButton>
          <IconButton aria-label="share" onClick={()=>{alert("feature comming soon");console.log("feature comming soon")}}>
            <Badge badgeContent={comments} color="primary">
              <ChatBubbleOutlinedIcon/>
            </Badge>
            
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
    
      </Card>
        </center>

    
      
    );
}
