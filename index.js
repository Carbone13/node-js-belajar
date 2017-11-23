var Scraper = require ('images-scraper')
  , bing = new Scraper.Bing();


var express = require('express');
var app = express();



app.get('/index', function(req, res){
	var id = req.query.id;
  
  bing.list({
	keyword: id,
	num: 5,
	detail: true
})
 .then(function (item) {
 	//console.log('pencarian untuk', id);
    //res.send('tester');
    //response += '<p id="c">' + item + '</p>';
    //res.send(response);
    
    res.json(item)
    //res.json(item.url)
//res.json({ user: 'tobi' })
//res.status(500).json({ error: 'message' })
    
 }).catch(function(err) {
 	console.log('err',err);
 });
 
});
console.log('aplikasi berjalan');
app.listen(8080);
