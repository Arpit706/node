const fs= require("fs");
const readableStream = fs.createReadStream(__filename)
 readableStream.close();
readableStream.on("close",()=>{
    console.log("this is from readableStream close event callback")
})


setImmediate(()=>{"this is setImmediate 1"});
setTimeout(()=>{"this is setTimeout 1"},0);
process.nextTick(()=> console.log("this is process.nextTick 1"))
Promise.resolve().then(()=> console.log("this is Promise.resolve 1"))    


//close queue CB are executed after the executionb of all queues










