const { fork } = require("child_process");
const child = fork("./child.js");
child.send("Hello from parent");
child.on("message", (msg) => {
    console.log("Message from child:", msg);
});
child.on("close", () => {
    console.log("Child process exited");
});