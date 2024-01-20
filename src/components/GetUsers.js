import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import {LOAD_DATA} from "../GraphQL/Queries";

function GetUsers(){

    const {error, loading, data}=useQuery(LOAD_DATA);

    useEffect(()=>{
        console.log(data);
    },[data]);

    return (
        <div>
            <h1>Hisdfgh</h1>
        </div>
    )
    
    
}

export default GetUsers;