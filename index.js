//  const addFn = require("./add");
// console.log('hello from index.js');
// const sum = addFn(1,2);
// const sum2 = addFn(2,3);
// console.log(sum);
// console.log(sum2);



// require("./batman")
// require("./superman")

// const superHero = require('./super-hero')
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require('./super-hero')
// console.log(newSuperHero.getName());

// -----------------

// const SuperHero = require("./super-hero")

// const batman = new SuperHero("Batman")
// console.log(batman.getName())
// batman.setName("bruce nwaye")
// console.log(batman.getName())

// const superman = new SuperHero("Superman")
// console.log(superman.getName());

// -------------------

// const math = require("./math")
// const{add,subtract}=math
// console.log(add(2,3))
// console.log(subtract(2,3))

// -----------------------------

// const data = require("./data.json") 
 //always use .json while importing json fiiles because while running it it gives preference to .js first then .json 
// console.log(data.name)

// console.log("hello world")

// -------------------------------------------------------
//--------- Built in Modules
//1. Path Module
const path = require("node:path")
// console.log(__filename);
// console.log(__dirname); 

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));


// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));


// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))

// console.log(path.join("folder1","folder2","index.html"))
// console.log(path.join("/folder1","folder2","index.html"))
// console.log(path.join("/folder1","//folder2","index.html"))
// console.log(path.join("/folder1","//folder2","../index.html"))
// console.log(path.join(__dirname,"data.json"));


// console.log(path.resolve("folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","index.html"))
// console.log(path.resolve("/folder1","//folder2","../index.html"))
// console.log(path.resolve(__dirname,"data.json"));


//---------------------------Callback pattern

// function greet(name) {
//     console.log(`Hello ${name}`);
// }
// function higherOrderFunction(callback) {
//     const name = "Arpit"
//     callback(name)
// }
// higherOrderFunction(greet);


//----------------------------------Events Module
// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza",(size,topping)=>{
// console.log(`Order received: Baking a ${size} pizza with ${topping}`)
// })
// emitter.on("order-pizza",(size)=>{
// if(size === "large") {
//     console.log("Serving Complimentary drinks")
// }
// })
// console.log("dom work before event ocuurs in the system")

// emitter.emit("order-pizza","large","mushroom")

//------------------EventEmitter from eventemitter

// const PizzaShop = require("./pizza-shop")
// const DrinkMachine= require("./drink-machine")

// const pizzaShop =  new PizzaShop();
// const drinkMachine = new DrinkMachine();


// pizzaShop.on("order",(size,topping)=>{
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`)
//     drinkMachine.serveDrink(size)
// })

// pizzaShop.order("large","topping");
// pizzaShop.displayOrderNumber();

//Streams and Buffers
// const buffer = new Buffer.from("Vishwas")

// buffer.write("Codevolution");

// console.log(buffer.toString())
// console.log(buffer)
// console.log(buffer.toJSON());


//----------------fs Promise Module

// const fs =  require("node:fs");
// const { writeFileSync } = require("node:fs");
// console.log('First')
//  const fileContents = fs.readFileSync("./file.txt","utf-8")
// console.log(fileContents)
// console.log('Second')
// fs.readFile("./file.txt","utf-8",(error,data)=>{
// if(error){
//     console.log(error);
// }
// else{
// console.log(data);
// }
// })
// console.log('Third')

// fs.writeFileSync("./greet.txt","hello world")
// fs.writeFile("./greet.txt"," hello arpit",{ flag:"a"},(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File written")
//     }
// })

//----------------fs Promise Module

// const fs = require("node:fs/promises")
// console.log("first")
// fs.readFile("file.txt","utf-8")
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))
// console.log("second")

// async function readFile(){
//     try{
//         const data = await fs.readFile("file.txt","utf-8");
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// readFile();


//--------------------------Streams(transfer data from one file to another)

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip()

// const readableStream = fs.createReadStream("./file.txt",{
//     encoding:"utf-8",
//     highWaterMark:2,
// })
// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))
// const writeableStream = fs.createWriteStream("./file2.txt")

// readableStream.on("data",(chunk)=>{
//     console.log(chunk);
//     writeableStream.write(chunk)
// });
//instead of this above function we cabn use PIPES
// readableStream.pipe(writeableStream)

//-------------------------HTTP 
//-----CREATING A NODE SERVER

// const http = require("node:http");

// const server = http.createServer((req,res)=>{
// res.writeHead(200,{"Content-Type":"text/plain"})
// res.end("hello arpit")
// console.log(req)
// })
// server.listen(3000,()=>{
//     console.log("Server runnibng on port 3000")

// })

//-----Json Response

// const http = require("node:http");

// const server = http.createServer((req,res)=>{
//     const superHero = {
//         firstName:"Bruce",
//         lastName:"Wayne",
//     }

// res.writeHead(200,{"Content-Type":"application/json"})
// res.end(JSON.stringify(superHero))
// console.log(req)
// })
// server.listen(3000,()=>{
//     console.log("Server running on port 3000")
// })

//----HTML Response

// const http = require("node:http");
// const fs = require("node:fs")


// const server = http.createServer((req,res)=>{
//     const superHero = {
//         firstName:"Bruce",
//         lastName:"Wayne",
//     }

// res.writeHead(200,{"Content-Type":"text/html"})
// fs.createReadStream(__dirname+"./index.html").pipe(res);
// // const html = fs.readFileSync("./index.html","utf-8")
// // res.end(html)
// })
// server.listen(3000,()=>{
//     console.log("Server running on port 3000")
// })

//-----HTML TEMPLATE
// const http = require("node:http");
// const fs = require("node:fs")


// const server = http.createServer((req,res)=>{
//     const name = "Arpit"
//     const superHero = {
//         firstName:"Bruce",
//         lastName:"Wayne",
//     }

// res.writeHead(200,{"Content-Type":"text/html"})
// let html = fs.readFileSync("./index.html","utf-8")
//  html=html.replace("{{name}}",name)
// res.end(html)
// })
// server.listen(3000,()=>{
//     console.log("Server running on port 3000")
// })

//---HTML ROUTING
// const http = require("node:http");
// const fs = require("node:fs")


// const server = http.createServer((req,res)=>{
//   //req.mehod-- GET POST PUT DELETE
//     if(req.url==='/'){
//     res.writeHead(200,{"Content-Type":"text/plain"})
//     res.end("Home Page")
// }else if(req.url==="/about") {
//     res.writeHead(200,{"Content-Type":"text/plain"})
//     res.end("About Page")
// }else if(req.url==="/api") {
//     res.writeHead(200,{"Content-Type":"application/json"})
//     res.end(JSON.stringify({
//         firstName:"Bruce",
//         secondName:"Wayne"
//     }))
// }else{
//     res.writeHead(404)
//     res.end("Page not found")
// }
// })
// server.listen(3000,()=>{
//     console.log("Server running on port 3000")
// })
 
//----------[libuv]
//Thread Pool
// const fs = require("node:fs");
// console.log("first");

// fs.readFile("./file.txt","utf-8",(err,data)=>{
//     console.log("File content");
// });
// console.log("Last")

// const https = require("node:https");
// const crypto = require("node:crypto")


// process.env.UV_THREADPOOL_SIZE = 16; 
// const MAX_CALLS = 12;

// const start = Date.now();
// for(let i = 0;i<MAX_CALLS;i++){
// https
//   .request("https://www.google.com",(res)=>{
//    res.on("data",()=>{});
//    res.on("end",()=>{
//     console.log(`Request:${i+1}`,Date.now()-start);
//    });

//   })
//   .end();



    // crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
    //     console.log(`Hash: ${i+1}`,Date.now()-start)
    // });
// }


// const start = Date.now()
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// console.log("Hash ", Date.now() - start);



//-----------Microtask Queue
//order of priority - >  Microtask Queue>Timer Qeues


//EXP-6
//Timer queeue executed in first order
// setTimeout(()=> console.log("this is setTimeout 1"),1000);
// setTimeout(()=> console.log("this is setTimeout 2"),500);
// setTimeout(()=> console.log("this is setTimeout 3"),0);




//EXP-5
// setTimeout(()=>console.log("this is setTimeout 1"),0)
// setTimeout(()=>{
//     console.log("this is setTimeout 2")
// Promise.resolve().then(()=>
// console.log("this is the inner promise inside setTimeout")
// );
// },0)
// setTimeout(()=>console.log("this is setTimeout 3"),0)



//Timer Qeues
//EXP4 - Callbacks in microtask queues are executed in between the execution of callbacks in the timer queue
// setTimeout(()=>console.log("this is setTimeout 1"),0)
// setTimeout(()=>{
//     console.log("this is setTimeout 2")
// process.nextTick(()=>
// console.log("this is the inner next tick inside setTimeout")
// );
// },0)
// setTimeout(()=>console.log("this is setTimeout 3"),0)

//EXP3

// process.nextTick(()=> console.log("this is process.nextTick 1"))
// process.nextTick(()=> {
//     console.log("this is process.nextTick 2")
// process.nextTick(()=>
//   console.log("thid is the inner next tick inside the next tick")
// );

// });
// process.nextTick(()=> console.log("this is process.nextTick 3"))


// Promise.resolve().then(()=>console.log("thid is Promise.resolve 1"))

// Promise.resolve().then(()=>{
//     console.log("thid is Promise.resolve 2")
//     process.nextTick(()=>
//      console.log("thid is the inner next tick inside Promose then block")
//      );

// });
// Promise.resolve().then(()=>console.log("thid is Promise.resolve 3"));


//EXP-2
// Promise.resolve().then(()=>console.log("thid is Promise.resolve 1"))
// process.nextTick(()=> console.log("this is process.nextTick 1"))

//--EXP-1
// console.log("console.log 1");
// process.nextTick(()=> console.log("this is process.next 1"));
// console.log("console.log 2")








