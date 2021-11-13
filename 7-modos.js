const os=require('os')
//info abt current user 
const user=os.userInfo()
console.log(user)
//returns systems uptime in sec's
console.log(`Systems uptime is ${os.uptime()} sec's`)

const currentOs={
    name:os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)
