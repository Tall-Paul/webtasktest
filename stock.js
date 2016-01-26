var request = require('request');


module.exports =
    function (context, req, res) {
        //get stock
        var textString = context.body.text;
        stock = textString.replace('stock: ','');
        var url = 'http://finance.yahoo.com/d/quotes.csv?s=';
        url = url+stock+"&f=nab";
        request.get(url, function (error, response, body) {
            res.send("hello");
        });
    }
