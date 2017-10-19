import React from 'react'
import Channel from './Channel'

const ChannelsContainer = (props)=>{
  debugger;
 return(

   <div className="container-fluid">
     <Channel key={props.match.params.roomname} socket={props.socket} room={props.match.params.roomname}/>
   </div>
 )
}

export default ChannelsContainer
