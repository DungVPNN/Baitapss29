import React, { Component } from 'react';
interface Props {}
interface State {
    numbers:number[]
}
export default class Bai7 extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      numbers: [],
    };
  }
  handleClick = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    this.setState(addNumber => ({
      numbers: [...addNumber.numbers, newNumber],
    }));
  };
  render() {
    const numbersString = this.state.numbers.join(', ');
    return (
      <div>
        <button onClick={this.handleClick}>Thêm số</button>
        <div>
          <p>{`[${numbersString}]`}</p>
        </div>
      </div>
    );
  }
}