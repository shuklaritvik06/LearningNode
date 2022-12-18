const os = require("os");
// console.log(os.version());
console.log(os.homedir());  // It will return the home directory of the user.
console.log(os.platform()); // It will return the platform of the system.
console.log(os.arch());    // It will return the architecture of the system.
console.log(os.uptime()); // It will return the uptime of the system.
console.log(os.freemem()); // It will return the free memory of the system.
console.log(os.totalmem()); // It will return the total memory of the system.
console.log(os.cpus()); // It will return the cpu of the system.
console.log(os.networkInterfaces()); // It will return the network interfaces of the system.
console.log(os.tmpdir()); // returns os temporary file directory
console.log(os.version()); // version of OS
console.log(os.userInfo()); // returns user info
console.log(os.uptime()); // returns no. of second of uptime
console.log(os.type()); // name of OS
console.log(os.hostname()); // host name of pc
console.log(os.release()); // kernel release version
console.log(os.platform());
console.log(os.loadavg());
