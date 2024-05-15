import React, { Component } from 'react';

interface Props {}
interface State {
    value: boolean;
}
export default class Bai6 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: false,
        };
    }
    toggleButton = () => {
        this.setState(change => ({
            value: !change.value,
        }));
    };
    render() {
        return (
            <div>
                <button onClick={this.toggleButton}>
                    {this.state.value ? 'Hiện' : 'Ẩn'}
                </button>
            </div>
        );
    }
}