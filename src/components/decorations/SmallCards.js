import React from 'react'
import { Card } from '@mui/material'
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors'

export default function SmallCards(props) {
  return (
    <div>
        
        <Card sx={{ maxWidth: '95%', margin: '2%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[900] }} aria-label="recipe">
           <b>{props.username[0]}</b> 
          </Avatar>
        }
        
        title=<b>{props.username}</b>
        subheader={props.content}
      />
      </Card>
    </div>
  )
}
