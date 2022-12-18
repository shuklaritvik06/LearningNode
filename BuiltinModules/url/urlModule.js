const url = require('url'); 
const URL = "http://localhost:3000/index.html?name=ritvik&age=20#23";
const q = new url.URL(URL);

console.log(q.search); // ?name=ritvik&age=20
console.log(q.host);  // localhost:3000
console.log(q.hostname); // localhost
console.log(q.port); // 3000
console.log(q.protocol); // http:
console.log(q.href); // http://localhost:3000/index.html?name=ritvik&age=20
console.log(q.pathname); // /index.html
console.log(q.slashes); // true
console.log(q.searchParams); // URLSearchParams { 'name': 'ritvik', 'age': '20' }
console.log(q.searchParams.get('name')); // ritvik
console.log(q.origin);  // http://localhost:3000
console.log(q.hash);  // #23




// url.parse() method way for search param
// const query = q.query;
// console.log(query);
// console.log(query.name);
// console.log(query.age);

