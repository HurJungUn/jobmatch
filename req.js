const request = require('request');
const cheerio = require('cheerio');
const options = {
    url: "http://www.y-y.hs.kr/lunch.view?date=20190429",
    headers: {
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'text/html; charset=utf-8'
    }
}

request(options , function(err, res, body){
    if(err != null){
        console.log(err);
        return;
    }

    $ = cheerio.load(body);
    let list = $(".menuName > span");
    let txt = $(list[0]).text();
    console.log(txt);
});

// request("http://www.y-y.hs.kr/lunch.view?date=20190429", function(err, res, body){
//     if(err != null){
//         console.log(err);
//         return;
//     }

//     $ = cheerio.load(body);
//     let list = $(".menuName > span");
//     let txt = $(list[0]).text();
//     console.log(txt);
    
// });