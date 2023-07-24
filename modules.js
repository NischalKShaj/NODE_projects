// modules used in this file 

// module for addition 

exports.add = function add(num1, num2){
    return num1 + num2;
}
 

//module for subtraction 

exports.sub = function sub(num1, num2){
    return num1 - num2;
}

// module for multiplication

exports.mul = function mul(num1, num2){
    return num1 * num2;
}

// module for division 

exports.div = function div(num1, num2){
    return num1 / num2;
}

// module for the setttimeout devloper made

exports.settimeout = function(ms){
    let date = new Date();
    while((new Date() - date)<=ms){

    }
}