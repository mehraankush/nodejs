// all sync task in callstack takes priority over async tasks

console.log("This is sync 1")

process.nextTick(()=>{
    console.log("THwis is process.nextTick 1")
})

console.log("This is sync 2")