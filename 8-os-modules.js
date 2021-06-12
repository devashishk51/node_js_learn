const os = require('os')

//Info about current user
const user = os.userInfo();

//Methods returns the system uptime in seconds
console.log("the system uptime is "+os.uptime()+" seconds");

//System Info
const currentos = {
    name : os.type(),
    relese : os.release(),
    totalMemery : os.totalmem(),
    freeMemory : os.freemem()
}
console.log(currentos);