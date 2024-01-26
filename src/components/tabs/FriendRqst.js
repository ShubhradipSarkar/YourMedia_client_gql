import ResponsiveAppBar from "../decorations/Navbar";
import LabelBottomNavigation from "../decorations/Footer";
import client from "../../Apollo";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

function FriendRqst(){
    const userId = localStorage.getItem('userId').toString();

    const RQST_GRAPHQL_QUERY =  gql`
    query GetUser($userId: String!) {
      user(id: $userId) {
        username
        friendRequests {
          username
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

    return(
        <div>
            <ResponsiveAppBar/>
                <h1>{userId}</h1>
            <LabelBottomNavigation/>
        </div>
    )
}

export default FriendRqst