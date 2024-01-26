import React from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'
import client from '../../Apollo'
import { useState } from 'react'
import { useEffect } from 'react'
import PostsOnFeed from './PostsOnFeed'

export default function Posts() {
    const userId = localStorage.getItem('userId').toString();
    const FEED_GRAPHQL_QUERY =  gql`
    query GetPosts($userId: String!) {
      user(id: $userId) {
        Feed{
            message
            user{
                username
            }
            createdAt
            likes{
                username
            }
            Comments{
                comment
                commenter{
                    username
                }
            }
        }
      }
    }
  `;
    const { loading, error, data } = useQuery(FEED_GRAPHQL_QUERY,{variables: {userId: userId},} ,{ client });

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
      
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {/* <PostsOnFeed/> */}
      {data &&
        data.user &&
        data.user.Feed &&
        data.user.Feed.map((post, index) => (
          <div key={index}>
            <PostsOnFeed name={post.user.username} post={post.message} time={post.createdAt}/>
            {/* <h3>{post.user.username}</h3>
            <p>{post.message}</p> */}
            
          </div>
        ))}
    </div>
  )
}
