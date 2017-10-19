import React from 'react'
import MsgItem from './MsgItem'


const MsgList = (props)=>{

  const messageList = props.messages.map((msg,index)=> <MsgItem key={index} message={msg}/>)

  return(
    <ul>{messageList}</ul>
  )

}

export default MsgList
