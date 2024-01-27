import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import client from '../Apollo';
import { gql } from '@apollo/client';
import ResponsiveAppBar from './decorations/Navbar'
import LabelBottomNavigation from './decorations/Footer';
import RecipeReviewCard from './decorations/Card';


const YourOtherComponent = () => {
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
      
      <div style={{marginTop: '60px'}}>
      {loading && <p>Loading...</p>}
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
      <LabelBottomNavigation/>
    </div>
  );
};

export default YourOtherComponent;
