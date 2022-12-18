function add(a,b){
    return a+b;
}
function isNull(){
    return null;
}
function isTruth(){
    return true;
}
function isFalse(){
    return false;
}
function addUser(){
    return {
        name: "Ritvik",
        age: 20,
        address:{
            city: "Prayagraj"
        }
    }
}
function reverseString(string){
    return string.split().reverse().join("");
}
module.exports = {
    add,
    isFalse,
    isNull,
    isTruth,
    addUser,
    reverseString
}