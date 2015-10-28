import React, { Component } from 'react';
import jQuery from 'jquery';
import styles from 'styles.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 });
        }, 1000);
    }

    render() {
        return (
            <div>Counter: {this.state.counter}</div>
        )
    }
}
