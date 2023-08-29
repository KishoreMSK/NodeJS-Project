//Reading & writing file Synchronously:-
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync('./content/result.txt',`The result is : ${first} , ${second}`)// will write the content of first and second in the mentioned file
