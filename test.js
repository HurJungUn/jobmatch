const qs = require('querystring');

let string = "This is 한글 쿼리";

let encodeStr = qs.escape(string);

console.log(encodeStr);