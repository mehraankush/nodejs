const EventEmitter = require('node:events');

class PizzaOrder extends EventEmitter{
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size,toppings){
        this.orderNumber++;
        this.emit('order-pizza',size,toppings)
    }

    displayOrder(){
        console.log(`Current order number is ${this.orderNumber}`)
    }

    serveDrinks(size){
      if(size === "large"){
        console.log("serving a complimentry drink")
      }
    }
}

module.exports = PizzaOrder;