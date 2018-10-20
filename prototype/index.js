const express = require('express');

const scraper = require('./scraper');

const cors = require('cors');

const app = express();
app.use(cors());
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

app.get('/', (req, res) => {
	res.json({
		message: 'Scraping is Fun!'
	});
});

app.get('/search/:title', (req, res) => {
	scraper
	.searchMovies(req.params.title)
	.then(movies => {
		res.json(movies);
	});

});

app.get('/movie/:imdbid', (req, res) => {
	scraper
	.getMovie(req.params.imdbid)
	.then(movie => {
		res.json(movie);
	});

});

app.get('/reviews/:imdbid', (req, res) => {
	scraper
	.getReviews(req.params.imdbid)
	.then(reviews => {
		//JSON.stringify(reviews, null, "\n");
		res.json(reviews);
	});

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
