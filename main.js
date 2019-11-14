const { empty,withArgs,MyEvenEmitter } = require('./eventbox')

//empty()
//const names = ['Steven','Josias','Maxime','Fabian']
//withArgs(names)
//console.log("\n ====================")
//withArgs('Heliote')


const em = new MyEvenEmitter()

const  unsubscribe = em.on('hello',function(){
console.log(`hello,World`)
});

em.on('hello',function(first, last){
    console.log(`hello,World ${first} ${last}`)
 });

em.emit("hello")
em.emit("hello",'Steven','job')
//cancel
unsubscribe()
em.emit("hello")
em.emit('unknown')