const request = require('request');
const cheerio = require('cheerio');
const charset = require('charset');
const iconv = require('iconv-lite');

module.exports = function(date,callback){

        date = date.split("-").join("");

        const options = {
        url: "http://www.y-y.hs.kr/lunch.view?date=" + date,
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        encoding: null
    }

    request(options, function (err, response, body) {

        if (err != null) {
            return;
        }

        const enc = charset(response.headers, body);
        const result = iconv.decode(body, enc);

        $ = cheerio.load(result);
        let menu = $(".menuName > span");
        menu = menu.text();

        callback(menu);
    });
};