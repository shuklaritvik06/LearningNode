const queryString = require('querystring');
const query = 'foo=bar&abc=xyz&abc=123';
console.log(queryString.parse(query));
// Prints: { foo: 'bar', abc: ['xyz', '123'] }
console.log(queryString.stringify(queryString.parse(query)));
// Prints: foo=bar&abc=xyz&abc=123