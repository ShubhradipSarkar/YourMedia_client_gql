import React from 'react'
import { useQuery } from '@apollo/client'
import client from '../../Apollo'
import { useEffect } from 'react'
import { gql } from '@apollo/client'
import SmallCards from './SmallCards'

export default function LikesonPosts({postId}) {
    const LIKES_GRAPHQL_QUERY = gql`
    query GetLikes($postId: String!) {
        post(post_id: $postId) {
            likes{
                id
                username
                
            }
            
        }
    }`;

  const { loading, error, data } = useQuery(LIKES_GRAPHQL_QUERY,{variables: {postId: postId},} ,{ client });

  useEffect(() => {
    if (loading) {
      console.log('Loading...');
    } else if (error) {
      console.error('Error:', error);
    } else {
      console.log('Data:', data);
    }
  }, [loading, error, data]);

  if(loading){
    return <p>loading...</p>
  }

  console.log(data);
  return (
    <div>
    {data && (
        <ul className='usersList' >
        {data?.post?.likes?.map((like, index) => (
          
        //   <h1>{like.username}</h1>
          <SmallCards username={like.username}/>
        
        ))}
        </ul>
      )}
    </div>
  )
}
