# NodejsProjects

- [x] Url Shortner
- [x] Todo App
- [x] Blog App
- [x] CLI
- [x] Chat App
- [x] API Proxy
- [x] PostBox
- [x] Shareongo
- [x] Meet&Greet
- [x] Password Protected sharing

- Init Project -> Top Level Code -> Require Modules -> Event Callback Register -> CPU Task Offload to thread pool (4-128) -> Event Loop -> Expired Timer -> IO Pooling -> Set Immediate Callback ->Close callback ->exit 


The Node.js event loop is a crucial aspect that enables non-blocking I/O operations despite JavaScript being single-threaded

1. **Timers Phase:** Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2. **Pending Callbacks Phase:** Executes I/O callbacks deferred to the next loop iteration.
3. **Idle, Prepare Phase:** Internally used phases.
4. **Poll Phase:** Retrieves new I/O events and executes I/O-related callbacks, blocking when necessary. It can transition to the next phase if certain conditions are met.
5. **Check Phase:** Executes `setImmediate()` callbacks immediately after the poll phase, if scheduled.
6. **Close Callbacks Phase:** Handles close callbacks, such as 'close' events for sockets.
