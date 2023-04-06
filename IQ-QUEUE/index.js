
//EXP-1
//callbacks in micro queue execute before I/Q queue
// const fs= require("fs");
// fs.readFile(__filename,()=>{
//     console.log("this is readFile")
// })
// process.nextTick(()=> console.log("this is process.nextTick 3"))
// Promise.resolve().then(()=>console.log("thid is Promise.resolve 1"))

//EXP-2
// const fs = require("fs")

// setTimeout(() => console.log("this is setTimeout 1"),0)

// fs.readFile(__filename,()=>{
//     console.log("this is readFile")
// })



//EXP3

// const fs= require("fs");
// fs.readFile(__filename,()=>{
//     console.log("this is readFile")
// })
// process.nextTick(()=> console.log("this is process.nextTick 3"))
// Promise.resolve().then(()=>console.log("thid is Promise.resolve 1"))
// setTimeout(() => console.log("this is setTimeout 1"),0)

// for(let i=0;i<20000000;i++){}

//EXP-4 -> I/O Polling & check queue

// const fs= require("fs");
// fs.readFile(__filename,()=>{
//     console.log("this is readFile") // <--I/O Queue
//     setImmediate(() => console.log("this is setImmediatet 1"))   //<-- check queue function
// process.nextTick(()=>{
//     console.log("this is process.nextTick inside the readfile")
// });
// Promise.resolve().then(()=>{
//     console.log("this is inner Promise.resolve inside readFile")
// })

// })
// process.nextTick(()=> console.log("this is process.nextTick 1"))
// Promise.resolve().then(()=>console.log("thid is Promise.resolve 1"))
// setTimeout(() => console.log("this is setTimeout 1"),0)
// setImmediate(() => console.log("this is setImmediatet 1"))  // <-- check queue function

// for(let i=0;i<20000000;i++){}

//EXP-5
// setImmediate(()=>{"this is setImmediate 1"});
// setImmediate(()=>{
//     console.log("this is setImmediate 2")
//     process.nextTick(()=> console.log("this is process.nextTick 1"))
//     Promise.resolve().then(()=> console.log("this is Promise.resolve 1"))    
// });
// setImmediate(()=> console.log("this is setImmediate 3"));


//EXP-6
setTimeout(()=> console.log("this is setTimeout 1"),0);
setImmediate(()=> console.log("this is setImmediate 1"));
for(let i=0;i<20000000;i++){}

