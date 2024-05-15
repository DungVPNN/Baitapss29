import React, { Component, ChangeEvent } from 'react';

interface Props {}
interface State {
    value: string;
}
export default class Bai4 extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            value: "HN",
        };
    }
    handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            value: e.target.value,
        });
    };
    render() {
        return (
            <div>
                <select id="country" name="country" onChange={this.handleChange}>
                    <option value="HN">Hà Nội</option>
                    <option value="Hải Dương">Hải Dương</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                    <option value="Thanh Hóa">Thanh Hóa</option>
                </select>
                <p>Tỉnh/Thành phố : {this.state.value}</p>
            </div>
        );
    }
}