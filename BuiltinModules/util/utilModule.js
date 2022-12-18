const util = require("util");
async function hello() {
  console.log("I am a async func");
  return 12;
}
const func = util.callbackify(hello);
func((err, value) => {
  if (!err) {
    console.log(value);
  }
});
console.log(util.types);
console.log(util.types.isAnyArrayBuffer(new ArrayBuffer()));
process.env.NODE_DEBUG = "util";
const enabled = util.debuglog('foo').enabled;
console.log(enabled);
const myfunc = util.deprecate(function() {
    throw new Error('This function is deprecated');
},"myfunc is deprecated");
console.log(util.isDeepStrictEqual(
  { someKey: 'someValue', somThingElse: { nested: true } },
  { somThingElse: { nested: true }, someKey: 'someValue' }
));