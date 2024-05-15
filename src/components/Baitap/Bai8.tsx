import React, { Component } from 'react';

interface Props {}
interface State {
    count: number;
}
export default class Bai8 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0, 
        };
    }
    handleClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
        }));
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click {this.state.count} lần</button>
            </div>
        );
    }
}