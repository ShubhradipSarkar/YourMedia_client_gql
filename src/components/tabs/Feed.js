import React from 'react'
import ResponsiveAppBar from '../decorations/Navbar'
import LabelBottomNavigation from '../decorations/Footer'
import { gql } from '@apollo/client'
import client from '../../Apollo'
import { useQuery } from '@apollo/client'
import { useEffect } from 'react'
import InputWithIcon from '../decorations/InputWithIcon'
import Posts from '../decorations/Posts'


const Feed = () => {
    
    return (
        <div>
            <ResponsiveAppBar/>
            <div style={{margin: 'auto',marginTop: '75px', maxWidth: '550px', boxSizing: 'border-box'}}>
            
            
            <div style={{ maxWidth: '550px',margin:'50px' ,borderRadius: '15px', border: '2px solid black',}}>
                <center>
                <InputWithIcon/>
                </center>
            
                
            </div>
            <Posts/>
            </div >
            <LabelBottomNavigation/>
        </div>
    )
}

export default Feed