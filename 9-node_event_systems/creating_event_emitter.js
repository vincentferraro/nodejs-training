const EventEmitter = require('events')

const myEmitter = new EventEmitter()

// Pattern for heritage

class MyEmitter extends EventEmitter{
    constructor(opts={}){
        super(opts)
        this.name = opts.name
    }

    destroy(err){
        if(err)this.emit('error',err)
        else this.emit('close')
    }


    add(a,b){
        this.on('add',()=>{console.log(a+b)})
    }
    eventAdd(){
        this.emit('add')
    }
    addListener(name,fn){
        this.on(name,fn)
    }

    useEvent(name){
        this.emit(name)
    }
}

const ee = new MyEmitter()

ee.add(2,3)
ee.eventAdd()
ee.add(3,4)
ee.eventAdd()
ee.addListener('call',()=>{console.log('I CALL IT',)
})

ee.useEvent('call')

// prepend Listener

const firstEmitter = ()=>{ console.log('FIRST EMITTER')}
const secondEmitter =  ()=>{ console.log(`I'm overtaking FIRST EMITTER`)}
myEmitter.on('event',firstEmitter)
myEmitter.emit('event')

myEmitter.prependListener('event',secondEmitter)

myEmitter.emit('event')

myEmitter.once('event-one',()=>{console.log(`I'm here just one time and I will leave`)})
myEmitter.emit('event-one')


// Remove listener

// myEmitter.removeListener('event', firstEmitter)
// myEmitter.emit('event')


// Error event

process.stdin.resume()


ee.emit('error',new Error('oh oh'))

