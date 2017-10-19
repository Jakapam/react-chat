import React from 'react'
import Channel from './Channel'

const ChannelsContainer = (props)=>{
  debugger;
  const channels = props.joinedRooms.map( (room) =>
    <Channel key={room} socket={props.socket} room={room}/>
  )

  return(
    <div className="row">
      {channels}
    </div>
  )
}

export default ChannelsContainer
