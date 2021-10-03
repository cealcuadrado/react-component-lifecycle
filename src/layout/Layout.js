import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };

        this.addCounter = this.addCounter.bind(this);
    }

    addCounter() {
        var count = this.state.counter;
        count++;
        this.setState({counter:count});
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.addCounter}>
                    <i className="fas fa-plus fa-fw"></i> Add To Counter
                </button>
                <hr/>
                <p>Counter: {this.state.counter}</p>
            </div>
        );
    }
}

export default Layout;