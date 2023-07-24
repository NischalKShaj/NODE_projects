// Passing argumrnts and paramter to the iife function

// declaring an iife immediately invoked function expression 

(function(message){//passing parameters to the function
    const superHero = "Batman..."
    console.log(message,superHero);
})("I am ");//giving arguments to the function

(function(message){
    const superHero = "Smash...."
    console.log(message, superHero);
})("Hulk ");