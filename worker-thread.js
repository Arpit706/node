const {parentPort} = require("node:worker_thread");
let j=0;
    for(let i =0;i<600000000;i++){
   j++;
    }
    parentPort.postMessage(j);