// program that imports the settimout module that works like a setTimeout in built function

const timer = require('./modules');
const scanner = require('prompt-sync');
const prompt = scanner();


let time = Number(prompt("Enter the time in miliseconds for for waiting : "))

console.log("start");
// calling the settimeout module 
timer.settimeout(time);

console.log("end");