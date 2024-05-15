
import React, { Component } from 'react'
interface Props{}
interface State{
    value:string
}
export default class Bai3 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            value:""
        }
    }
    handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            value:e.target.value,
        })
    }
  render() {
    return (
      <div>
        <input 
        onChange={this.handleChange}
        type="date"
         />
         <p>Thời gian: {this.state.value}</p>
      </div>
    )
  }
}
