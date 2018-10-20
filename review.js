const main = document.querySelector('main');

const main2 = document.querySelector('main');

const imdbid = window.location.search.match(/imdbid=(.*)/)[1];

const baseurl = 'http://localhost:3000';

const resultlist = document.querySelector('#results');

function getMovie(imdbid){
  return fetch(`${baseurl}/movie/${imdbid}`)
    .then(res => res.json());
}

function getReviews(imdbid){
  return fetch(`${baseurl}/reviews/${imdbid}`)
    .then(res => res.json());
}

function showmovie(movie){
  console.log(movie);
  const section = document.createElement('section');
  main.appendChild(section);
  section.outerHTML = `
    <section class="row" >
      <div class="colxsxs"><img src="${movie.poster}" /></div>
      <div class="col-8">
      <h2>${movie.title}</h2>
      <h6>${movie.date} | ${movie.runTime}</h6>
      <h5>${movie.rating}</h5>
      <font size="4.2" color="black">Summary:</font>
      <p class="fontcolor">${movie.summary}</p>
      <a href="${movie.trailer}">Watch trailer!</a>
      </div>
    </section>
  `
}

/*function showreviews(reviews){
  console.log(reviews);
  const secction = document.createElement('section');
  main2.appendChild(section);
  secction.outerHTML = `
  <section class="row" >
    <div>
    <h2>${reviews.rate} | ${reviews.rtitle}</h2>
    <h6>${reviews.uname} | ${reviews.rdate}</h6>
    <p class="fontcolor">${reviews.rev}</p>
    </div>
  </section>
  `
}*/

function showreviews(results){
	console.log(results);
	var re = document.querySelector("#results");
	results.forEach(review => {
		const li = document.createElement('li');
		//const img = document.createElement('img');
		const a = document.createElement('a');
		a.textContent = review.ratint;
		li.appendChild(a);
    a.textContent = review.rtitle;
    li.appendChild(a);
    a.textContent = review.uname;
    li.appendChild(a);
    a.textContent = review.$rdate;
    li.appendChild(a);
    a.textContent = review.rev;
		resultlist.appendChild(li);
	});
}
getMovie(imdbid)
  .then(showmovie);



getReviews(imdbid)
  .then(showreviews);
