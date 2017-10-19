import React, { Component } from 'react'
import ChannelsContainer from './ChannelsContainer'
import ChannelContainer from './ChannelContainer'
import { Route, Link } from 'react-router-dom'

export default class Dashboard extends Component{

  state={
    newRoomInput: "",
    joinedRooms: [],
    roomList: [],
  }

  componentDidMount(){

    this.props.socket.emit('send-username', this.props.username);
    this.props.socket.emit('requestRoomList');
    this.props.socket.on('roomList', (rooms)=>{
      this.setState({
        roomList: rooms.map((room)=>{
          return <span key={room}><Link to={`/${room}`}>{`${room} `}</Link></span>
        })
      })
    })

  }

  componentWillUnmount(){
    console.log("Dashboard unmounting")
  }

  onRoomInputChange = (e)=>{
    this.setState({ newRoomInput: e.target.value})
  }

  onNewRoomSubmit = (e)=>{
    e.preventDefault()
    this.props.socket.emit('room', this.state.newRoomInput)
    this.setState({
      joinedRooms: [...this.state.joinedRooms, this.state.newRoomInput],
      newRoomInput: ""
    })
    e.target.reset();
  }

  render(){

    return(
      <div>
        <div>
            <h1>{this.props.username}</h1>

            <div>
              {this.state.roomList}
            </div>

            <form onSubmit= {this.onNewRoomSubmit}>
              <input type="text" placeholder="Join or Create Room" value={this.state.newRoomInput} onChange={this.onRoomInputChange}></input>
            </form>

            <Link to="/">All Chats</Link>

            <ChannelsContainer className="container" joinedRooms = {this.state.joinedRooms} socket = {this.props.socket}/>

            <Route path="/:roomname" render= {(props)=><ChannelContainer socket={this.props.socket} {...props}/> } />

          </div>
        </div>
    )
  }
}
