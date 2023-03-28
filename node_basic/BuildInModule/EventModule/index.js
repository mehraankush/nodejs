const EventEmitter = require('node:events');
const order = require('./orderPizza')

const orderPizza = new  order();

orderPizza.on('order-pizza', (size,toppings)=>{
    console.log(`order conform size  ${size} with toping ${toppings}`);
    orderPizza.serveDrinks(size);
});

orderPizza.order("large","mushroom");
orderPizza.displayOrder();


// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size,topping)=>{
//     console.log(`order conform size  ${size} with toping ${topping}`);
// });

// emitter.on("order-pizza", (size)=> {
//    if(size ==="large"){
//     console.log("you deserve a complimentry drink");
//    }
// });

// console.log("Order Pizza");
// // it initilize the event with event name and arg1 arg2
// emitter.emit("order-pizza","large","tomato");