import { gql } from "@apollo/client";

export const ADD_FRIEND_MUTATION = gql`
  
  mutation AddFriend($user: String!, $friend: String!) {
    addFriend(user: $user, friend: $friend) {
      user
      friend
    }
  }
`;

