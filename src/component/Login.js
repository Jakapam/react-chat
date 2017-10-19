import React, { Component } from 'react'

export default class Login extends Component{

  state={
    username: ""
  }

  onChange = (e)=>{
    this.setState({ username: e.target.value })
  }

  render(){
  
    return(
      <div>
        <h1>Chatsy!</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder="username" value={this.state.username} onChange={this.onChange}></input>
        </form>
      </div>
    )
  }

}
