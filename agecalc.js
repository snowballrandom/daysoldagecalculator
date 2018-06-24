//javascript

console.log('Hello from the console!');

function ageCalc(age){
	
	var html = document.getElementById('daysOld');
	
	if(isNaN(age)){
		html.innerHTML = 'You must enter a number!';
		console.log('You didnt enter a number silly goose!')
	}else{

	  var days = 365.25;

	  var daysAlive = days * age;
	
	  console.log(daysAlive);

	  
	  html.innerHTML = 'You are ' + age + ' years old and have been alive for ' + daysAlive + ' Days';
	}
}

ageCalc(prompt('How old are you?'));