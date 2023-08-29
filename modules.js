const sayHello = require('./methods')
const names = require('./names')

sayHello(names.name1,names.name2)

//it is not mandatory to store the imported values in variable in order to use it.
require('./mind-grenade') //will call the file and that file runs as mention there