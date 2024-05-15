import React, { Component } from 'react'

interface State{
  name:string
}
interface Props{}
export default class Class extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state ={
      name: 'Quang'
    }
  }
  // nơi khai báo các tên hàm
  handleClick=()=>{
    // đối với class, khi muốn cập nhập state
    this.setState({
      name: 'Minh Anh'
    });
  }
  render() {
    return (
      <div>
        <p>Xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
