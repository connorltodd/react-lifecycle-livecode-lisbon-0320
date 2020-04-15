import React from 'react';

class Counter extends React.Component {

    componentDidMount() {
        console.log('Component has mounted')
        console.log(this.props.counter)
    }

    componentDidUpdate() {
        console.log('Component has updated')
        console.log(this.props.counter)
    }

    componentWillUnmount() {
        console.log('Component has unmounted')
    }

    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

export default Counter;