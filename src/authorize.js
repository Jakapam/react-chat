import React, { Component} from 'react'
import { Redirect } from 'react-router-dom'

function authorize(RenderedComponent){

  return class extends Component{

    loggedIn(){
      return !!localStorage.getItem('dummyToken')
    }

    render(){

      if(!this.loggedIn() && this.props.location.pathname !=='/login'){
        return <Redirect to="/login"/>
      } else if (this.loggedIn() && this.props.location.pathname === '/login'){
        return <Redirect to="/" />
      } else {
        return <RenderedComponent {...this.props}/>
      }

    }
  }

}

export default authorize
