// All callbacks in nextTick takes priority over promise queue

// experiment 1

// Promise.resolve().then(()=>console.log("THis is resolved promise 1"))
// process.nextTick(()=>console.log("THis is resolved nextTick"))

//Experiment 2

// experiment 3 
// experiment 4

//timer queue
setTimeout(()=>console.log("Settimeout 1"),0)
setTimeout(()=>{
    console.log("Settimeout 2");
    process.nextTick(()=>console.log("This is nexttick inside setTimeout"));
},0)
setTimeout(()=>console.log("Settimeout 3"),0)

// micro task queue
process.nextTick(()=>console.log("This is nextTick 1"))
process.nextTick(()=>{
    console.log("This is nextTick 2")
    process.nextTick(()=>console.log("This is inner nextTick inside inner nextTick"));
})
process.nextTick(()=>console.log("This is nextTick 3"));

// if current task is happing inside promise queue then it'll do all the promises first then move to nextTick tasks
Promise.resolve().then(()=>console.log("THis is resolved promise 1"))
Promise.resolve().then(()=>{
    console.log("THis is resolved promise 2");
    process.nextTick(()=>console.log("This is nextTick inside promise"));

})
Promise.resolve().then(()=>console.log("THis is resolved promise 3"))