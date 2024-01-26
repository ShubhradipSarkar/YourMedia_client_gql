import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import client from '../Apollo';
import { gql } from '@apollo/client';
import ResponsiveAppBar from './decorations/Navbar'
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

  return (
    <div>
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
      <a href="/test1">nav test</a>
      <LabelBottomNavigation/>
    </div>
  );
};

export default YourOtherComponent;
