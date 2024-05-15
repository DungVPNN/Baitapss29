import React, { Component } from 'react'

interface State{
  name:string
}
interface Props{}
export default class Bai1 extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state ={
      name: ''
    }
  }
  handleClick=()=>{
    this.setState({
      name: 'Clicked'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click me</button>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
