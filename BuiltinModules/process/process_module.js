const process = require('process');
console.log(process.env); // returns the environment variable object for a current process
console.log(process.cwd()); // returns the current working directory
// console.log(process.exit(0));  // exits the current node process with the given exit code
process.exitCode=0
console.log(process.exitCode);
try{
    process.chdir("/tmp");  // change the directory to the given argument
}catch(e){
    console.log(e);
}
console.log(process.versions); // returns the versions objects of all the node and its dependencies
console.log(process.uptime()); // returns the uptime in seconds of the current node process
console.log(process.title); // returns the title of the current node process
console.log(process.arch); // returns the architecture of the current node process
console.log(process.platform); // returns the platform of the current node process
console.log(process.memoryUsage()); // returns the memory usage of the current node process
console.log(process.pid); // returns the process id of the current node process
process.nextTick(()=>{console.log("nextTick")}); // calls the given function asynchronously
console.log(process.argv); // returns the array of command line arguments of the current node process
console.log(process.stdout); // returns the standard output stream of the current node process
console.log(process.stderr); // returns the standard error stream of the current node process
console.log(process.stdin); // returns the standard input stream of the current node process
console.log(process.setMaxListeners(10)); // sets the maximum number of listeners for the current node process
console.log(process.getMaxListeners()); // returns the maximum number of listeners for the current node process
console.log(process.umask(0000)); // sets the umask of the current node process
console.log(process.resourceUsage()); // returns the resource usage of the current node process
console.log(process.release); // returns the release of the current node process
console.log(process.version); // returns the version of the current node process
console.log(process.release); // returns the release of the current node process