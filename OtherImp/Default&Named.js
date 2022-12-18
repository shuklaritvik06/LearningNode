// Default Exports

module.exports = function a(){
    console.log("Default Exports");
}

// Named Exports
const name = "Ritvik";
module.exports = name;

module.exports = "Ritvik";

console.log(module);

// exports is a module scoped variable that refers to module.exports
exports.func  = (a)=>{
    console.log("func");
    console.log(a);
};
console.log(exports);

exports = {
    name: "Ritvik",
}

console.log(exports);
console.log(require.cache);
