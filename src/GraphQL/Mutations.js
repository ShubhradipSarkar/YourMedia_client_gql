import { gql } from "@apollo/client";

export const ADD_FRIEND_MUTATION = gql`
  
  mutation AddFriend($user: String!, $friend: String!) {
    addFriend(user: $user, friend: $friend) {
      user
      friend
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost($user: String!, $message: String!, $createdAt: String!){
    addPost(user: $user, message: $message, createdAt: $createdAt){
        user
        message
        createdAt
    }
  }
`

export const ADD_LIKE = gql`
  mutation AddLikes($liked_by: String!, $post_id: String!){
    addLikes(post_id: $post_id, liked_by: $liked_by){
        post_id
        liked_by
    }
  }
`