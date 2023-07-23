// program for calculator 

// importing modules.....
const calc = require('./modules')

// module for taking the user input...
const scanner = require('prompt-sync')
const prompt = scanner();


console.log("Enter your choice \n1.Addition \n2.Subtraction \n3.Multiply \n4.Division");
let choice = Number(prompt(""))

let num1 = Number(prompt("Enter the first number : "))
let num2 = Number(prompt("Enter the next number : "))
let result;

switch(choice){

    // switch conditions for addition
    case 1:
        result = calc.add(num1, num2);
        console.log(`The sum of ${num1} and ${num2} is : ${result}`);
        break;

    //switch condition for subtraction
    case 2:
        result = calc.sub(num1, num2);
        console.log(`The difference of ${num1} and ${num2} is : ${result}`);
        break;

    // switch condition for multiplication
    case 3:
        result = calc.mul(num1, num2);
        console.log(`The product of ${num1} and ${num2} is : ${result}`);
        break;

    //switch condition for division
    case 3:
        result = calc.div(num1, num2);
        console.log(`The quotient of ${num1} and ${num2} is : ${result}`);
        break

    // default block
    default:
        console.log("Enter a valid number !!!!");
}







