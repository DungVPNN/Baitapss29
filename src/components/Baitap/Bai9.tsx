import React, { Component } from 'react';
interface Props {}
interface State {
    email: string;
    password: string;
}
export default class Bai9 extends Component<Props, State> {
    private emailInput: React.RefObject<HTMLInputElement>;
    private passwordInput: React.RefObject<HTMLInputElement>;
    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.emailInput = React.createRef();
        this.passwordInput = React.createRef();
    }
    handleSubmit = () => {
        if (this.emailInput.current && this.passwordInput.current) {
            this.setState({
                email: this.emailInput.current.value,
                password: this.passwordInput.current.value
            });
        }
    };
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Nhập email" ref={this.emailInput}/>
                </div>
                <div>
                    <input type="password" placeholder="Nhập mật khẩu" ref={this.passwordInput}/>
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
                <p>Email: {this.state.email}</p>
                <p>Mật khẩu: {this.state.password}</p>
            </div>
        );
    }
}