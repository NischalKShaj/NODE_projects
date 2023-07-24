// program to recollect the working of callback

// to show the need of callback
// let date = new Date();
// console.log("Start....");
// for(let i=0;i<=100;i++){
//     console.log(i);
// }
// console.log("end");
// //now calculate the execution time
// let diff = new Date() - date;
// console.log(`The execution time is ${diff}`);

// now doing the same with a callback

// let date = new Date()
// let time;
// function test(callback){
//     console.log("start..");
//     callback();
//     console.log("end");
// }
// function work(){
//     for (let i=0;i<100;i++){
//         console.log(i);
//     }
// }
// test(work)
// let diff = new Date() - date;
// console.log(`The execution time is ${diff}`);

// the execution time has now decreased


// checking on a settimeout created by user

let date = new Date()
function time(ms){
    while((new Date()-date)<=ms){
        // console.log("hi");
    }
}
console.log("Start....");
time(3000)
console.log("Stop....");
/* note :- when we dont give anything to print in the while loop it seems like a 
settimeout but remove the comments inside the while loop you will get to know the difference */