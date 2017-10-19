import React, { Component } from 'react';
import Dashboard from './component/Dashboard'
import Login from './component/Login'
import authorize from './authorize'
import { Route } from 'react-router-dom'
import openSocket from 'socket.io-client'
import './App.css';

class App extends Component {

  state ={
    user: {},
  }

  componentDidMount(){
    this.setState({
      user: JSON.parse(localStorage.getItem('user'))
    })
  }

  logUserIn = (e)=>{
    localStorage.setItem('dummyToken', 'test')
    localStorage.setItem('user', `{ "username": "${e.target.firstChild.value}" }`)
    this.setState({
      user: JSON.parse(localStorage.getItem('user')),

    })
  }



  render() {

    const AuthLogin = authorize(Login)
    const AuthDashboard = authorize(Dashboard)

    return (
      <div className="App container-fluid">
        <Route path="/" render={(props)=> <AuthDashboard socket={openSocket('http://192.168.2.40:3000')} username={this.state.user.username} {...props}/>} />

        <Route path="/login" render={(props)=> <AuthLogin handleSubmit= {this.logUserIn} {...props}/>} />
      </div>
    );
  }
}

export default App;
