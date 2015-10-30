import React, { Component } from 'react';
import Reflux from 'reflux';
import jQuery from 'jquery';
import actions from 'actions';
import store from 'store';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = store.getInitialState();
    }

    componentDidMount() {
        store.listen(this.setState, this);
        setInterval(() => {
            actions.incrementCounter();
        }, 1000);
    }

    render() {
        return (
            <div>Count: {this.state.counter}</div>
        )
    }
}
