import React from 'react'
import ResponsiveAppBar from '../decorations/Navbar'
import LabelBottomNavigation from '../decorations/Footer'

export default function Notifications() {
  return (
    <div>
        <ResponsiveAppBar/>
            <center>
                <div style={{maxWidth: '550px', background: 'black', padding: '10px', margin: '10px', marginTop: '80px', boxSizing: 'border-box', borderRadius: '15px'}}>
                    <h1>Hi</h1>
                    <h1>Hi</h1>
                    <h1>Hi</h1>
                    <h1>Hi</h1>
                    <h1>Hi</h1>
                    <h1>Hi</h1>
                </div>
            </center>
            
        <LabelBottomNavigation/>
    </div>
  )
}
