
module.exports =
    function (context, req, res) {
        //get stock
        var request = require('request');
        var textString = context.body.text;
        stock = textString.replace('stock: ','');
        var url = 'http://finance.yahoo.com/d/quotes.csv?s=';
        url = url+stock+"&f=nab";
        request.get(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var csv = body;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.send("hello");
            }
        });


    }
