import React, { Component } from 'react';

interface Props {}
interface State {
  isHovered: boolean;
}
export default class Bai11 extends Component<Props, State> {
  constructor(props:Props){
    super(props)
    this.state={
      isHovered: false
    }
  }
  handleChange = () => {
    this.setState({ isHovered: true });
    setTimeout(() => {
      this.setState({ isHovered: false });
    }, 5000);
  };
  deleteMess=() =>{
    this.setState({ isHovered: false });
  }
  render() {
    return (
      <div>
        <div style={
          {
            borderRadius: '4px',
            border: '1px solid black',
            width: '200px', 
            height: '50px', 
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            opacity: this.state.isHovered ? 1 : 0 
          }
          }>Hiển thị thông báo<b onClick={this.deleteMess} style={{
            marginLeft: '10px',
            color: 'red',
          }}>X</b></div>
        <button onClick={this.handleChange} > Show notification </button>
        </div>
    )
  }
}