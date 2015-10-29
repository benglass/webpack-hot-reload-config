import Reflux from 'reflux';
import actions from 'actions';

const CountStore = Reflux.createStore({
    data: {
        counter: 1
    },
    getInitialState() {
        return this.data;
    },
    init() {
        actions.incrementCounter.listen(this.incrementCounter, this);
    },
    incrementCounter() {
        this.data.counter = this.data.counter + 1;
        this.trigger(this.data);
    }
});

export default CountStore;
