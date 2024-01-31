import React from 'react'
import { useQuery } from '@apollo/client'
import client from '../../Apollo'
import { useEffect } from 'react'
import { gql } from '@apollo/client'
import SmallCards from './SmallCards'

export default function CommentsonPosts({postId}) {
    const COMMENTS_GRAPHQL_QUERY = gql`
    query GetLikes($postId: String!) {
        post(post_id: $postId) {
            
            Comments{
                comment
                commenter{
                    id
                    username
                }
            }
        }
    }`;

    const { loading, error, data } = useQuery(COMMENTS_GRAPHQL_QUERY,{variables: {postId: postId},} ,{ client });

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

  return (
    <div>
       {/* {
        data?.post?.Comments?.map((comment, idx) => {
            <h1>{console.log(comment?.commenter.username)}</h1>
            {console.log(comment?.comment)}
            <SmallCards username = {comment?.commenter?.username} content = {comment.comment}/>
        })
       } */}
       {data && (
        <ul className='usersList' >
        {data?.post?.Comments?.map((Comment, index) => (
          
        //   <h1>{like.username}</h1>
          <SmallCards username = {Comment?.commenter?.username} content = {Comment.comment}/>
        
        ))}
        </ul>
      )}
    </div>
    
  )
}
