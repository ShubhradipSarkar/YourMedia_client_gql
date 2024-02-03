import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import client from '../Apollo';
import { gql } from '@apollo/client';
import ResponsiveAppBar from './decorations/Navbar'
import LabelBottomNavigation from './decorations/Footer';
import RecipeReviewCard from './decorations/Card';
import { Box } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
//import {passId} from './Login.js';

const YourOtherComponent = ({passId}) => {

  const userId = localStorage.getItem('userId');
  // Your GraphQL query
  const YOUR_GRAPHQL_QUERY =gql`
  query all($userId: String!){
    user(id: $userId){
      users{
        id
        username
        School
        presentInFriends
      }
    }
    
  }
  `
  const { loading, error, data } = useQuery(YOUR_GRAPHQL_QUERY,{variables: {userId: userId}}, { client });

  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    } else if (error) {
      console.error('Error:', error);
    } else {
      console.log('Data:', data);
    }
  }, [loading, error, data]);

  return (
    <div>
      <ResponsiveAppBar/>
      
      <Box >
      
      <div style={{marginTop: '100px', maxWidth: '550px', margin: '10px', marginTop: '80px'}} >
      {loading && 
      
      <Stack spacing={2}>
      
      <div style={{marginTop:'75px'}}></div>
      
      <Stack direction="row" spacing={2} padding={10}>
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rounded" width={150} height={50} margin={10}/>
      </Stack>
      
      <Skeleton variant="rounded" width={300} height={160} />

      <Stack direction="row" spacing={2}>
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rounded" width={150} height={50} margin={10}/>
      </Stack>
      
      <Skeleton variant="rounded" width={300} height={160} />

      <Stack direction="row" spacing={2}>
      <Skeleton variant="circular" width={50} height={50} />
      <Skeleton variant="rounded" width={150} height={50} margin={10}/>
      </Stack>
      
      <Skeleton variant="rounded" width={300} height={160} />
      
      
      
    </Stack>
    
    }
      {error && <p>An error occured! Refresh Page</p>}
      {data && (
        <ul className='usersList' >
        {data?.user?.users?.map((user, index) => (
          
          <RecipeReviewCard username={user.username} school={user.School} id={user.id} key={user.id} buttonText={user.presentInFriends} buttonTextAfterAction={"Connecting..."} reloadPage={"0"}/>
        ))}
        </ul>
      )}
      </div>
      
      <a href="/test">Form test</a>
      <a href="/test1">nav test</a>
      </Box>
      <LabelBottomNavigation/>
    </div>
  );
};

export default YourOtherComponent;
