//I/Q queue callbacks are executed after microtask and timer queues
const fs = require("fs");
fs.readFile(__filename,()=>{
    console.log("this is readFile 1")
})
process.nextTick(()=> console.log("this is process.nextTick 3"))
Promise.resolve().then(()=>console.log("thid is Promise.resolve 1"))
setTimeout(()=> console.log("this is setTimeot 1"),0);
for(let i = 0;i<20000000000000;i++){}