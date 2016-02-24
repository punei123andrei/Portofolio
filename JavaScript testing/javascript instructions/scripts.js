
// console.log("Start program");

 /*--------Alert
--------------------------------->*/

// var message = "Hello!";
// alert(message);


/*--------Document write
--------------------------------->*/

// document.write("<h1>Welcome to Javascript basics</h1>");

// message = "Welcome to Javascript";
// alert(message);


// console.log("Writing good Javascript");

// message = '<h1 class="special">Important Headline</h1>'
// document.write(message);



/*--------Console prompt
--------------------------------->*/

// console.log("Prompt comand");
// prompt('What is your name');

// var visitorColor = prompt('what is your favourite color?');
// alert(visitorColor);
// document.write(visitorColor);




/*--------Combining Variables
--------------------------------->*/

// var visitor = prompt('What is your name?');
// var message = "Numele tau este " + visitor + "<br>";
// document.write(message);





/*--------Updating a variable
--------------------------------->*/

// var visitor = prompt('What is your name?');
// var message = "Numele tau este " + visitor;
//  // message = message + " si esti un baiet bun!";
// message += " si esti un baiet bun!" + "<br>";

// document.write(message);




/*--------Measuring a string
--------------------------------->*/

// var passphrase = "Open Sesam";
// console.log(passphrase.length);




/*--------Converting strings
--------------------------------->*/

// console.log(passphrase.toLowerCase());
// console.log(passphrase.toUpperCase());

// var shout = prompt("Shout something!");
// shout += "!!!!!!!!!"
// alert(shout.toUpperCase());



/*--------Numbers
--------------------------------->*/


// var secondsPerMin = 60;
// var minPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;

// var secondsPerDay = secondsPerMin * minPerHour * hoursPerDay;
// document.write('There are ' + secondsPerDay + ' seconds in a day! <br>');

// var yearsAlive = secondsPerMin * minPerHour * hoursPerDay * daysPerWeek * weeksPerYear * 26;
// document.write('I\'ve been alive for more than ' + yearsAlive + ' seconds.');




/*--------Converting strings into numbers
-------------------------------------------->*/

// var cssBadges = prompt('How many CSS badges do you have?');
// var jBadges = prompt('How many javascriptbadges do you have?');

// var totalBadges = parseInt(cssBadges) + parseInt(jBadges);
// alert('Wow! You have ' + totalBadges + ' badges!');


//--Parse float Decimal--


// var decimalNo = parseFloat('3.41');
// alert(decimalNo);


//--Math objects--


// console.log(Math.round(3.3));
// console.log(Math.ceil(3.3));
// console.log(Math.floor(3.3));


// alert(Math.floor(Math.random() * 6) + 1); //--------Random number generator 1-6



/*--------Conditional statements
--------------------------------->*/


// var answer = prompt('What programing language is the name of a gem?');

// if ( answer.toUpperCase() === 'RUBY') {

//     document.write('<p>You\'re wright!</p>');

// } else {
// 	document.write('<p>You\'re wrong!</p>')
// }


//-----------------Conditional Statements------









/*--------Functions
--------------------------------->*/

// function alertRandom() {

// 		var randomNumber = Math.floor( Math.random() * 6 ) + 1;
// 		alert(randomNumber);

// }
// alertRandom();


//--Store a function in a variable--

				
// var alertRandom = function () {
// 	var randomNumber = Math.floor( Math.random() * 6 ) + 1;
// 		alert(randomNumber);

// }

//--Returning a function--

// function getRandomNumber() {
// 	var randomNumber = Math.floor( Math.random() * 6 ) + 1;
// 		return randomNumber;
// }
// alert(getRandomNumber());
// console(getRandomNumber());
// var diceRoll = getRandomNumber();


//--Verify e-mail address to see if its empty--

// function isEmailEmpty() {
// 	var field = document.getElementById('email');
// 	if (field.value === '') {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// var fieldTest = isEmailEmpty();

// if (fieldTest === true) {
// 	alert('Please provide your e-mail');
// }



/*--------Parameters
--------------------------------->*/


// function getRandomNumber( upper ) {
// 	var randomNumber = Math.floor(Math.random() * upper ) + 1;
// 	return randomNumber;
// }

// console.log(getRandomNumber(6));
// console.log(getRandomNumber(100));
// console.log(getRandomNumber(400));


//--Multiple parameters--


// function goToTheShop(drink, pastry, bread) {
// 	alert( drink + bread + 'and' + pastry + 'are on the way!' );
// }

// goToTheShop('Cocke', 'baton' , 'fromage' );



/*--------Variable scope
--------------------------------->*/

// function Greetings() {
// 	var person = 'Lilah';
// 	alert(person);
// }
// var person = 'George';
// Greetings();


// console.log("End program");



/*--------For loops with arrays
--------------------------------->*/

