const form = document.querySelector('input');

form.addEventListener('submit', formSubmitted);

function formSubmitted(event){
	event.preventDefault();

	console.log('form submitted');
}