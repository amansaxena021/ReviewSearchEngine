const form = document.querySelector('form');

const searchinput = document.querySelector('input');

const baseurl = 'http://localhost:3000';

const resultlist = document.querySelector('#results');

form.addEventListener('submit', formSubmitted);

function formSubmitted(event){
	event.preventDefault();
	const searchTerm = searchinput.value;
	getsearchresults(searchTerm)
		.then(showresults);
}

function getsearchresults(searchTerm){
	return fetch(`${baseurl}/search/${searchTerm}`)
		.then(res => res.json());
}

function showresults(results){
	console.log(results);
	var re = document.querySelector("#results");
	console.log(re);
	re.innerHTML = "";
	results.forEach(movie => {
		const li = document.createElement('li');
		const img = document.createElement('img');
		li.appendChild(img);
		img.src = movie.image;
		const a = document.createElement('a');
		a.textContent = movie.title;
		a.href = '/C:/Users/FLASH/Desktop/prototype/review.html?imdbid=' + movie.imdbid;
		li.appendChild(a);
		resultlist.appendChild(li);
	});
}
