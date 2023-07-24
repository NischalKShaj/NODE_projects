

const avengers = require('./iife_avengers')

console.log(avengers.superH.getName());

avengers.superH.setName("Captain America")
console.log(avengers.superH.getName());