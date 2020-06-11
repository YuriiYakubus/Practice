import React from 'react';

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            y1: 0
        }
    }
    static getDerivedStateFromProps(props, state) {
        return { y1: props.z1 * 10, };
    }
    render() {
        return (
            <div>
                <p>Z1: {this.props.z1}</p>
                <p>Y1: {this.state.y1}</p>
            </div >
        )
    }
}

export default App2;
