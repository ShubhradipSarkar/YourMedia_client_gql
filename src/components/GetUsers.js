// YourOtherComponent.js

import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import client from '../Apollo';
import { gql } from '@apollo/client';
import { SearchUserWithId } from '../GraphQL/Queries';
import ResponsiveAppBar from './decorations/Navbar'
//import SimpleBottomNavigation from './decorations/Footer';
import LabelBottomNavigation from './decorations/Footer';

const YourOtherComponent = () => {
  

  // Your GraphQL query
  const YOUR_GRAPHQL_QUERY =gql`
  query pako{
    hello
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

  console.log(localStorage.getItem('username'));

  return (
    <div>
      {/* Your component rendering logic */}
      <ResponsiveAppBar/>
      <h1>{localStorage.getItem('username')}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <p>{data.hello}</p>
        </div>
      )}
      
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <h1>.</h1>
      <a href="/test">Form test</a>
      <LabelBottomNavigation/>
    </div>
  );
};

export default YourOtherComponent;
