var request = require('request');
var stock = 'AAPL';
var url = 'http://finance.yahoo.com/d/quotes.csv?s=';
url = url+stock+&f=nab;

request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var csv = body;

        // Continue with your processing here.
    }
});



module.exports =
    function (context, req, res) {
        //get stock
        var request = require('request');
        var textString = context.body.text;
        stock = textString.replace('stock: ','');
        var url = 'http://finance.yahoo.com/d/quotes.csv?s=';
        url = url+stock+'&f=nab';
        request.get(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var csv = body;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(require('ejs').render(view.stringify(), {
                    stock: stock
                }));

            }
        });


    }

function view() {/*
    {
      text: <%= stock %>
    }
*/}