import React from 'react'

export default class Test extends React.Component{

  componentWillMount(){
    console.log("Component Preparing to mount");
  }

  componentDidMount(){
    console.log("Component Mounted");
  }

  render(){
    console.log("Test Rendered");
    return <div>Test</div>
  }

}
