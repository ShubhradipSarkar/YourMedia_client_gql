import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
query {
    user(id: "65a8006c12218359556d104c"){
      posts{
        message
      }
      
    }
    
  }
`;

export const SearchUserWithId = gql`
query {
  user(id: "65a8006c12218359556d104c"){
    id
    username
    friends{
      username
    }
    posts{
      message
      likes{
        username
      }
      Comments{
        commenter{
          username
        }
        comment
      }
    }
  }
}
`