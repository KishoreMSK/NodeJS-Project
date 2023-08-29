const path = require('path')

console.log(path.sep);// prints '\' for windows based system & '/' for macOS/linux systems

//path.join & path.resolve works in same way to join the different paths provided to it using the system specific path separator 
const filepath = path.join('/content/','text.txt')
console.log(filepath);  //will display the path for the file

const basename = path.basename(filepath);
console.log(basename); //will extract the last part of the filepath

console.log(path.parse(filepath)); // will give the detailed breakdown of the path like root, directoryname, basename,file extension, name of the file