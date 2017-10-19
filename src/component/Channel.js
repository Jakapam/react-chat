import React, { Component } from 'react'
import MsgList from './MsgList'


export default class Channel extends Component {

  state ={
    currentMessage: "",
    messageHistory: [],
    outGoingMessage: "",
    incomingMessage: "",
    room: this.props.room || this.props.match.params.roomname
  }

  componentWillMount(){
     this.socket = this.props.socket;
  }

  componentDidMount(){
    console.log("Component Mounted")
    this.props.socket.emit('room', this.state.room);
    this.props.socket.on(`message${this.state.room}`,
      (incomingMessage)=>{
        this.setState({messageHistory: [...this.state.messageHistory, incomingMessage]})
      }
    )
  }

   handleOutGoingMsg(msg) {
    this.props.socket.emit('chat message', {msg: msg, room:this.state.room});
  }


  onSubmit = (e)=>{
    e.preventDefault();
    this.handleOutGoingMsg(this.state.currentMessage)
    this.setState({ currentMessage: "" })
    e.target.reset();
  }

  onMsgChange = (e)=>{
    this.setState({ currentMessage: e.target.value })

  }

  render(){

      return (
        <div className="card">
          <div className="card-body">
            <h4 className= "card-title">{this.state.room}</h4>
            <MsgList messages={this.state.messageHistory}/>
            <form onSubmit= {this.onSubmit}>
              <input type="text" onChange={this.onMsgChange} value={this.currentMessage} placehold="Type your message"></input>
            </form>
          </div>
        </div>)
  }
}
