// program to read write append the other files in this file

// reading
// const fs = require('fs')

// fs.readFile('modules.js','utf-8',(err, data)=>{
//     console.log(data);
// })

// writing by creating a new file 

// const fs = require('fs')

// fs.writeFile('first1.js','console.log("working...")',(err)=>{
//     console.log("Testing");
// })

/* writing a file that already exist can cause overriding of the exisiting content hence I used a file that was not created till now*/ 


// appending into an existing file

// const fs = require('fs')

// fs.appendFile('first1.js','console.log("i am new member")',(error)=>{
//     console.log("data saved");
// })

/* appending to a non existing file leads to the creation of that file it doesnt return any error */

// program to delete a file

// const fs = require('fs')

// fs.unlink('first_1.js',(error)=>{
//     console.log("file is now deleted...");
// })

// /* Before deletion there was a file nmaed first_1 after deletion that file got deleted */

// reading a file

// const fs = require('fs')
 
// fs.readFile('modules.js','utf-8',function(err, data){
//     console.log(data);
// })

// wirting a file

// const { log } = require('console')
// const fs = require('fs')
// fs.writeFile('write.js','console.log("testing...")',()=>{
//     console.log("data changed");
// })

// appending a file 

// const fs = require('fs')
// fs.appendFile('write.fs','console.log("data appended...")',()=>{
//     console.log("new value added");
// })

// deleting a file 

const fs = require('fs')
fs.unlink('write.fs',()=>{
    console.log("file deleted...");
})