// OS Module
const os  = require('os')

const user = os.userInfo()
console.log(user);

const curUser = {
    time: os.uptime(),
    type: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(curUser);


