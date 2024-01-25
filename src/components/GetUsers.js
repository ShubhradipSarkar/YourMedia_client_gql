// YourOtherComponent.js

import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import client from '../Apollo';
import { gql } from '@apollo/client';

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

  return (
    <div>
      {/* Your component rendering logic */}
    </div>
  );
};

export default YourOtherComponent;
