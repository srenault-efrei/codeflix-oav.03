const { EventEmitter } = require('events').EventEmitter;

function empty() {
    const event = new EventEmitter();

    event.on('hi', () => {
        console.log('Chooppper!')
    });

    event.emit('hi')

}


function withArgs(data) {

    const event = new EventEmitter();

    event.on('newFellow', args => {
        if (typeof args === 'string') {
            console.log("Here come's a new pirate " + args)
        }
        else if (Array.isArray(args)) {
            for (const name of args) {
                console.log("Here come's a new pirate " + name)
            }
        }

    });

    event.emit('newFellow', data)
}

class MyEvenEmitter {

    constructor() {
        console.log("my Event is created")
        this.events = {}
    }


    on(eventName, callback) {

        //  this.events[eventName] = callback

        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)

        return () => {  // on utilise cette maniere pour monter au scope superieur pour accede au this de la classe 
            this.events[eventName] = undefined   //on vide les valeur de la cle en question  
        }
    }

    emit(eventName, ...data) { // restParameter  : on recupere 0 ..* parametre sous forme de tableau
        //this.events[eventName]()
        const arrCallback = this.events[eventName]

        if (arrCallback !== undefined) {
            // arrCallback(...data) // on recupere chaque element du tableau sous forme de chaine
            // callback(date[0],date[1],date[2])
            arrCallback.forEach(callback => {
                if (callback.length === data.length) {
                    callback(...data)
                }

            });
        }

    }

}

module.exports = {
    empty,
    withArgs,
    MyEvenEmitter
}