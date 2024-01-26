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
            <div style={{marginTop:'60px'}}>
            <InputWithIcon/>
            </div>
            <div>
                <Posts/>
            </div>
                
            <LabelBottomNavigation/>
        </div>
    )
}

export default Feed