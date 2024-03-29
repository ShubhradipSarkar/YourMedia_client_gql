import ResponsiveAppBar from "../decorations/Navbar";
import LabelBottomNavigation from "../decorations/Footer";
import client from "../../Apollo";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import RecipeReviewCard from "../decorations/Card";
//import RecipeReviewCard from "../decorations/Card";

function FriendRqst(){
    const userId = localStorage.getItem('userId').toString();

    const RQST_GRAPHQL_QUERY =  gql`
    query GetUser($userId: String!) {
      user(id: $userId) {
        username
        friendRequests {
            id
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
      <ResponsiveAppBar />
      <div  style={{marginTop: '60px'}}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.user && (
        <div>
          
          {data.user.friendRequests && data.user.friendRequests.length > 0 && (
            <div>
              <h4 style={{color:'#380466', padding: '5px'}}>Friend Requests</h4>
              <ul>
                {data.user.friendRequests
                  .filter((request) => request !== null)
                  .map((request, index) => (
                    // <li key={index}>{request.username}</li>
                    <RecipeReviewCard username={request.username} school={request.School} id={request.id} key={request.id} buttonText={"Accept"} buttonTextAfterAction={"Accepted.."} reloadPage={"1"}/>
                  ))}
              </ul>
            </div>
          )}
        </div>
      )}
      </div>
      <LabelBottomNavigation />
    </div>
    )
}

export default FriendRqst