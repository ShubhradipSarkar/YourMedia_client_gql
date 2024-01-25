// YourOtherComponent.js

import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import client from '../Apollo';
import { gql } from '@apollo/client';
import { SearchUserWithId } from '../GraphQL/Queries';
import ResponsiveAppBar from './decorations/Navbar'
//import SimpleBottomNavigation from './decorations/Footer';
import LabelBottomNavigation from './decorations/Footer';
import RecipeReviewCard from './decorations/Card';

const YourOtherComponent = () => {
  

  // Your GraphQL query
  const YOUR_GRAPHQL_QUERY =gql`
  query pako{
    users{
      id
      username
      School

    }
  }
  `

  const { loading, error, data } = useQuery(YOUR_GRAPHQL_QUERY, { client });

  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    } else if (error) {
      console.error('Error:', error);
    } else {
      console.log('Data:', data);
    }
  }, [loading, error, data]);

  //console.log(data.users)
  
  //console.log(localStorage.getItem('username'));

  return (
    <div>
      {/* Your component rendering logic */}
      <ResponsiveAppBar/>
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      
        
        {data && (
        <ul className='usersList' >
        {data?.users?.map((user, index) => (
          
            <RecipeReviewCard username={user.username} school={user.School} id={user.id} key={user.id}/>
            
          
        ))}
      </ul>
      
        
      )}
      
      
      <a href="/test">Form test</a>
      <LabelBottomNavigation/>
      
    </div>
  );
};

export default YourOtherComponent;
