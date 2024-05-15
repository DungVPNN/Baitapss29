import React, { Component } from 'react';

interface Props {}
interface State {
    value: boolean;
}
export default class Bai5 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: true,
        };
    }
    render() {
        return (
            <div>
                <button>
                    {this.state.value ? 'Hiện' : 'Ẩn'}
                </button>
            </div>
        );
    }
}