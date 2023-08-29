//Reading & writing file Asynchronously:-
const {readFile, writeFile} = require('fs');
//utf8 is used to specify the character encoding used to interpret the file data otherwise the result will in binary form
readFile('./content/first.txt', 'utf8',(err,result) => {
    if(err)
     return;
    const first = result;
     
readFile('./content/second.txt', 'utf8',(err, result) => {
    if(err)
     return;
    const second = result;
writeFile('./content/resultAsync.txt',`The result is : ${first} , ${second}`,(err,result) => {
    if(err)
     return;
    else
     console.log(result)
})
    })
})
//To rename the file
//fs.rename(oldPath, newPath, callback);

//To delete the file
//fs.unlink(path,callback)