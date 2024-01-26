import React from 'react'
import ResponsiveAppBar from '../decorations/Navbar'
import LabelBottomNavigation from '../decorations/Footer'
import { gql } from '@apollo/client'
import client from '../../Apollo'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import InputWithIcon from '../decorations/InputWithIcon'


const Feed = () => {
    const userId = localStorage.getItem('userId').toString();
    const RQST_GRAPHQL_QUERY =  gql`
    query GetPosts($userId: String!) {
      user(id: $userId) {
        friends{
            username
            posts{
                message
            }
        }
      }
    }
  `;
    const { loading, error, data } = useQuery(RQST_GRAPHQL_QUERY,{variables: {userId: userId},} ,{ client });

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
            <div style={{marginTop:'60px'}}>
            <InputWithIcon/>
            </div>
                
            <LabelBottomNavigation/>
        </div>
    )
}

export default Feed