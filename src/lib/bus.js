class Bus {
    constructor() {
        this.listeners = {};
    }

    subscribe(event, fn) {

        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(fn);
    }

    emit(event, data) {
        this.listeners[event].forEach(fn => fn(data));
    }
}