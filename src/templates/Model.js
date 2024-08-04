export class Model {
    constructor(initial) {
        this.state = initial;
        this.subscribers = [];
    }

    getValue() {
        return this.state;
    }

    setValue(value) {
        this.state = value;

        this.subscribers.forEach(subscriber => {
            subscriber();
        });
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }
}
