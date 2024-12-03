const ReviewEvent = {
    new_review: 'new_review',
    rated_review: 'rated_review'
};

class EventMessage {
    constructor(from, event) {
        this.from = from;
        this.event = event;
    }
}

class ReviewNotifier {
    events = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            console.log('Websocket connection established');
            this.receiveEvent(new EventMessage('system', 'connected'));
        };
        this.socket.onclose = (event) => {
            console.log('Websocket connection closed');
            this.receiveEvent(new EventMessage('system', 'disconnected'));
        };
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    broadcastEvent(from, event) {
        const eventMessage = new EventMessage(from, event);
        this.socket.send(JSON.stringify(eventMessage));
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers.filter((h) => h !== handler);
    }

    receiveEvent(event) {
        this.events.push(event);

        this.events.forEach((event) => {
            this.handlers.forEach((handler) => {
                handler(event);
            });
        });
    }
}

const reviewNotifier = new ReviewNotifier();
export { ReviewEvent, reviewNotifier };