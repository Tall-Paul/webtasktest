var request = require('request');
module.exports =
    function (context, cb) {
      var textString = context.body.text;
      stock = textString.replace('stock: ','');
      console.log(stock);
      var url = 'http://finance.yahoo.com/d/quotes.csv?s=';
      url = url+stock+"&f=nab";
      request(url, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            cb(null,{text:body});
          }
      })
    }
