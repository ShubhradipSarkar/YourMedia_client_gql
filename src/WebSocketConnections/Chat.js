import React, { useMemo } from 'react'
import {io} from 'socket.io-client'
import { useEffect , useState} from 'react'

export default function Chat() {
    const [message, setMessage] = useState('');
    const [room, setRoom] = useState('');
    const [chat, setChat] = useState([]);
    

    const SendMessage = (e) =>{
        e.preventDefault();
        socket.emit("message", {message, room});
        setMessage('');
        setRoom('');
    }
    const socket = useMemo(()=>io("http://localhost:4000/"),[]);

    useEffect(()=>{
        socket.on("connect", ()=>{
            console.log("connected", socket.id);
        })
        socket.on("receive", (data)=>{
            console.log(data)
            setChat((chat)=>[...chat, data])
        });
        socket.on("welcome", (s)=>{
            console.log(s);
        })
    },[]);

  return (
    <div>Chat

        <h1>Chat With Socket.io</h1>
        <input type="text" value={message} placeholder='message' onChange={(e)=>{setMessage(e.target.value)}}/>
        <input type="text" value={room} placeholder='room' onChange={(e)=>{setRoom(e.target.value)}}/>
        <button onClick={SendMessage}>Send</button>
        <div style={{margin: '50px'}}> </div>
        {chat.map((data, idx)=>(
            <div>
                <b>{data}</b>
                <br />
            </div>
            
            
        ))}
        {chat.map}
       
    </div>
  )
}
