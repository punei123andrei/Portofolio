/* ---- Cum te numesti?
------------------------------*/

// var nume = prompt('Cum te numesti?');
// var salut = "Salut " + nume + "!";
// salut +=  " Numele meu este Andrei!";
// alert(salut);

// salut += "<br>";


/* ---- Alege filmul
------------------------------*/

// var film = prompt('La ce film vrei sa te uiti?');

// var movie = "Filmul " + film + " l-am mai vazut o data!";
// alert(movie);

// var altFilm = prompt('Vrei sa vedem alt film?');
// altFilm += "!!!"

// var impreuna = 'Cum te numesti?<br>' + movie + '<br>Vrei sa vedem alt film?<br>' + altFilm.toUpperCase();

// document.write(impreuna);





/* ---- Jocul de intrebari
------------------------------*/

// var question = 3;

// var questionsLeft = '[ ' + question + ' questions left!]';

// var adjective = prompt('Te rog spune un adjectiv! ' + questionsLeft);
// question -= 1;
// questionsLeft = '[ ' + question + ' questions left!]';
// var verb = prompt('Te rog spune un verb! ' + questionsLeft);
// question -= 1;
// questionsLeft = '[ ' + question + ' question left!]';
// var noun = prompt('Te rog spune un pronume! ' + questionsLeft); 

// alert('All done, ready for the the message?');
// var sentence = '<h1>A fost candva ';	
// sentence += ' un programator ' + adjective + ' care voia sa foloseasca Javascript pentru';
// sentence += verb + ' un website</h1>';
// document.write(sentence);



/* ---- Numarul norocos
------------------------------*/

// var input = prompt('Completeaza un numar!');
// var numar = parseInt(input);
// var numarulTau = Math.floor(Math.random() * numar) + 1;
// alert(numarulTau);



/* ---- Random number game
------------------------------*/


// var randomNo = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('Ma gandesc la un numar intre 1 si 6. Care e acela?');

// if ( parseInt(guess) === randomNo ) {
// document.write('<p>Ai ghicit!</p>');
// } else {
// document.write('<p>Nu ai ghicit! Numarul este ' + randomNo + '!</p>');
// }



/* ---- Boolean values
------------------------------*/

// var correctGuess = false
// var randomNo = Math.floor(Math.random() * 6) + 1;
// var guess = prompt('Ma gandesc la un numar intre 1 si 6. Care e acela?');

// if ( parseInt(guess) === randomNo ) {
// 	correctGuess = true;
// }
// if (correctGuess === true) {
// 	document.write('<p>Ai ghicit!</p>');
// }  else {
// document.write('<p>Nu ai ghicit! Numarul este ' + randomNo + '!</p>');
// }


/* ---- Else if statement
------------------------------*/



// --Given variables--
// var correctGuess = false
// var randomNo = Math.floor(Math.random() * 6) + 1; //Random number
// var guess = prompt('Ma gandesc la un numar intre 1 si 6. Care e acela?'); //Prompt Intrebare



// // --First try--
// if ( parseInt(guess) === randomNo ) {
// 	correctGuess = true;


// // --If the number is greater than--
// } else if ( parseInt(guess) < randomNo ) {
//  	var guessMore = prompt('Numarul e mai mare decat ' + guess )

// 				if ( parseInt(guessMore) === randomNo ) {
// 					correctGuess = true;
// 				}

// // --If the number is less than--
// } else if ( parseInt(guess) > randomNo ) {
// 	var guessMore = prompt('Numarul e mai mic de ' + guess )

// 				if ( parseInt(guessMore) === randomNo ) {
// 					correctGuess = true;
// 				}


// // --Corect guess--
// } if (correctGuess) {
// 		document.write('<p>Ai ghicit!</p>');

// // --Incorect guess + solution--
// }  else {
// 		document.write('<p>Nu ai ghicit! Numarul este ' + randomNo + '!</p>');
// }


/* ---- Password game &&  si
------------------------------*/

// var userName = prompt('Please enter the userName');
// var password = prompt('Please enter the password');


// if ( userName.toUpperCase() == 'ANDREI_01' && password.toUpperCase() == 'SIMONA' ) {


// 		document.write('<h1>Welcome ANdrei!</h1>' )

// } else if ( userName == 'marius' && password == 'mioara') {


// document.write('<h1>Welcome Marius!</h1>')

// } else {
// 	document.write('<h1>Denied!</h1>')
// }





/* ---- Password game || sau
------------------------------*/

// if ( userName == 'andrei_01' || password == 'simona' || email == 'marianacojocaru' ) {


// 		document.write('<h1>Welcome ANdrei!</h1>' )

// }




/* ---- Quiz game!!!!!!!!!!!
------------------------------*/


// --Quizz begginz no answer--
// var correct = 0;



// --Quizz begginz no answer--

// var question1 = prompt('Zimi un animal cu dungi!');
// if ( question1.toUpperCase() === zebra || question1 === sconx) {
// 	correct += 1;
// }

// --Quizz begginz no --

// var question2 = prompt('Zimi un animal cu pete!');
// if ( question2.toUpperCase() === 'TIGRU' || question2.toUpperCase() === 'PAPAGAL' ) {
// 	correct += 1;
// }


/* ---- Quiz game!!!!!!!!!!!
------------------------------*/

// function nextNo(lower, upper ) {
// 	if (isNaN(lower) || isNan(upper)) {
//  		throw new Error('Both atguments must be numbers!');
// 	}
// 	return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// }

// console.log(nextNo(600, 400));
// console.log(nextNo('nine', 800));
// console.log(nextNo(245, 'one-hundred'));
// console.log(nextNo(867, 462));