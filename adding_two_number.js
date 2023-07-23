// adding two numbers

const scanner = require('prompt-sync')
const prompt = scanner();

let num1 = Number(prompt("Enter the first number : "))
let num2 = Number(prompt("Enter the second number : "))
let sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);