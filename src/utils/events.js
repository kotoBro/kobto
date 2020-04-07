class Event {
    constructor() {
        this.events = {}
    }
    on(eventsName, callBack) {
        if (this.events[eventsName]) {
            this.events[eventsName].push(callBack)
        } else {
            this.events[eventsName] = [callBack]
        }
    }
    emit(eventsName, params) {
        if (this.events[eventsName]) {
            this.events[eventsName].map((callBack) => {
                callBack(params)
            })
        }
    }
}

export default Event