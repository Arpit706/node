// const localModule = require("./path-to-module")
// const fs = require("node:fs")  //Built in Module

const upperCase = require("upper-case").upperCase;

function greet(name){
    console.log(upperCase(`Hello ${name}, welcome to Codeevolution!`));
}
greet("Arpit")
module.exports = greet;






