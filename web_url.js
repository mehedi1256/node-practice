var url = require('url');

var address = 'http:/localhost:8080/default.html?year=2023&month=february';

//parse the address

var q = url.parse(address, true);

/* 
    the parse method returns an object containing url properties.
*/

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

//the query property returns an object with all the querystring parameters as properties

var qdata = q.query;
console.log(qdata.month);
console.log(qdata.year);


