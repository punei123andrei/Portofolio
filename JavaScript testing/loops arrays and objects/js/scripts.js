        /* ---------Loops!
------------------------------>*/

// if ( name === 'Daniel') {
//   alert('Hey, I know you!');
// }

// function randomNo(upper) {
// 	return Math.floor( Math.random() * upper ) + 1;
// }

// var counter = 0;
// while( counter < 10000 ) {
// 	var randomNum = randomNo(6);
// 	document.write(randomNum + ' ');
//   counter += 1;
// }
  


// //==Variables==
// var upper = 600;
// var randomNo = getRandomNo(upper);
// var guess;
// var attempts = 0;


// //==Function==
// function getRandomNo(upper) {
// 	return Math.floor( Math.random() * upper ) + 1;
// } 

// //==Loop==
// while (guess !== randomNo) {
// 	guess = getRandomNo(upper);
// 		attempts += 1;
// }
// document.write('<h1>The random number was ' + randomNo + ' times to </h1>');
// document.write('<h1> It took the computer ' + attempts + ' times to guess it!');



/* ---------do (this) while() loop
----------------------------------->*/


// var randomNo = getRandomNo(5);
// var guess;
// var count = 0;
// var correctGuess = false;


// function getRandomNo(upper) {
// 	var num = Math.floor(Math.random() * upper) + 1;
// 	return num;
// }

// do {
//   guess = prompt('ma gabdesc la un numar intre 1 si 10, care e numarul?')
//   count += 1;

//   if(parseInt(guess) === randomNo) {
//      correctGuess = true;
//   }
// } while ( ! correctGuess ) 
// document.write('<h1>You guessed the number!</h1>');
// document.write('<p>It took you ' + count + ' times to guess the number!</p>' + randomNo);



/* ---------For loop!!!!!!!
----------------------------------->*/

 // var html = '';

 // for (var i = 1; i <= 10; i += 1;) {
 //   html += '<div>' + i  + '</div>';
 // }
 // document.write(html);






 /* ---------Arrays!!!!!!!
----------------------------------->*/


//==Example of an array==
// var myShopping = [ 'lapte', 'unt', 'oua' ];

// var shoppingList = [
// 'morcovi', 
// 'rosii',
// 'carnati'  ]

//==How to access an array==
// console.log(shoppingList[1]);
// console.log(shoppingList[2]);


//==Lenght of an array==

// shoppingList.push(castraveti, ceapa, paine);
// shoppingList.unshift(salata);
// console.log(shoppingList);


/* ---------How does push and unshift work?
---------------------------------------------->*/

// function printList( list ) {
// 	var listHTML = '<ol>';
// 	for ( var i = 0; i < list.length; i += 1 ) {
// 		listHTML += '<li>' list[i] + '</li>';
// 	}
// 		listHTML += '</ol>';
// 		print(listHTML)
// }

// printList(playList);


// function print(html) {
// 	document.write(html)
// }


/* ---------How does push and unshift work? Example!
---------------------------------------------->*/


	// var students = ['ANdra', 'Cosmin', 'Monica', 'Ioana'];
	// students.push('Ion');

	// for (var i = 0; i < students.length; i += 1){
	//     console.log(students[i])
	// }

/* ---------Array methods
---------------------------------------------->*/


// var newStud = ['Bogdan' + 'Costache' + 'Rosie'];
// var currentStud = ['Dominica' + 'Laia' + 'Milita'];
// var allStud = newStud.concat(currentStud);

// var position = newStud.indexOf('Costache');
// console.log(position);


/* ---------Array methods search engine
---------------------------------------------->*/

// var stock = ['mere', 'banane', 'pepeni', 'inghetata', 'paine', 'pineaple', 'ceapa', 'peste'];
// var search;





// function print(message){
// 	document.write('<p>' + message + '</p>');
// }




// while (true) {
// 	search = prompt('Cauta un produs. Tasteaza "list" ca sa-ti arate produsele si "quit" ca sa iesi');
// 	search = search.toLowerCase();

// 	if ( search === 'quit' ) {
// 		break;
// 	} else if ( search === 'list') {
// 		print(stock.join(', '));
// 	} else {
// 		if ( stock.indexOf( search ) > -1 ) {
// 			print('Da, avem ' + search + ' in stoc!');
// 		} else {

// 			function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// 	}

//              search = capitalizeFirstLetter(search);
// 			print( search + ' nu avem pe stoc!');
// 		}
// 	}
// }



/* ---------Two dimensional arrays
---------------------------------------------->*/


// var playList = [
// 	['Homne', 'Inna'], 
// 	['Element', 'Injustice'],
// 	['Marmota', 'Inglu'],
// 	['Mariah', 'Prinmeth'],
// 	['Joker', 'Gluma']

// ]


// function print(message) {
//       document.write(message);
// }

// function printSongs( songs ) {
// 	var listHtml = '<ol>';
// 	for(var i = 0; i < songs.length; i += 1) {
// 		listHtml += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
// 	}
// 	listHtml += '</ol>';
// 	print(listHtml);
// }


// printSongs(playList);


/* ---------Question game with two dimensional arrays
---------------------------------------------------->*/

// var questions = [
// ['Cate perechi de papuci am?', 6 ],
// ['Cat costa un nikon?', 20],
// ['Cat are un km?', 1000],
// ['Cat are o mila?', 1400],
// ['Cat are un kg?', '1000 de grame!']
// ];

// var correctAnswers = 0;
// var wrongAnswers = 0;

// var question;
// var answer;
// var response;
// var html;
// var correct = [];
// var wrong = [];

// function print(message) {
// 	 var outputDiv = document.getElementById('output');
// 	 outputDiv.innerHTML = message;
// }

// function buildList(arr) {
// 	var listHtml = '<ol>';
// 	for (var i = 0; i < arr.length; i += 1) {
// 		listHtml += '<li>' + arr[i] + '</li>';
// 		listHtml += '</ol>';
// 		return listHtml;
// 	}
// }


// for( var i = 0; i < questions.length; i += 1) {
// 	question = questions[i][0];
// 	answer = questions[i][1];
// 	response = parseInt(prompt(question));

// 	if (response === answer) {
// 		correctAnswers += 1;
// 		correct.push(question);
// 	} else {
// 		wrong.push(question);
// 	}
// }

// html = 'Ai raspuns la ' + correctAnswers + ' intrebari corect';
// html += '<h2>You got these questions correct: </h2>';
// html += buildList(correct);
// html += '<h2>You got these questions wrong:</h2>';
// html += buildList(wrong);
// print(html);




/* ---------Javascript Objects
---------------------------------------------------->*/


// Example

// var person = {
// 	name: 'Andrei',
// 	tara: 'Romania',
// 	varsta: 26,
// 	student: true,
// 	skills: ['Javascript', 'Html', 'CSS']

// };


//  function print(obj) {
//  	var div = document.getElementById('output');
//  	div.innerHTML = obj;
//  }



//  var message = '<p>Hello. My name is ' + person.name + '</p>';
// message += '<p>I live in ' + person.tara + '</p>';

// person.name = 'Thomas Blomkvist';
// message += '<p>But i wish my name was ' + person.name + '</p>';
 


// person.varsta += 1;
// message += '<p>My age is ' + person.varsta + '</p>';
// message += '<p>I have ' + person.skills.length + ' skills: ';
// message += person.skills.join(', ') + '</p>'


// print(message);


/* ---------For loops with objects
---------------------------------------------------->*/

// for (var doina in person) {
// console.log(doina, ': ', person[doina]);
// }


// var questions = [
//  {question: 'Cate perechi de papuci am?', 
//  answer: 6 
// },
// {question: 'Cat costa un nikon?', 
// answer: 20
// },
// { question: 	'Cat are un km?',
// answer: 1000
// },

// ];

// var correctAnswers = 0;


// var question;
// var answer;
// var response;


// function print(message) {
// 	 var outputDiv = document.getElementById('output');
// 	 outputDiv.innerHTML = message;
// }




// for( var i = 0; i < questions.length; i += 1) {
// 	question = questions[i].question;
// 	answer = questions[i].answer;
// 	response = prompt(question);
// 	response = parseInt(question);

// 	if (response === answer) {
// 		correctAnswers += 1;
// 	}
// }

// html = 'Ai raspuns la ' + correctAnswers + ' intrebari corect';
// print(html);



/* ---------Question game!!!!!
---------------------------------------------------->*/


var students = [
  {
    name: 'brooklyn',
    track: 'Front-end Web Developer',
    achievements: '22',
    points: '2900'
  },
  {
    name: 'dustin',
    track: 'PHP Developer',
    achievements: '10',
    points: '1000'
  },
  {
    name: 'wallace',
    track: 'Android Developer',
    achievements: '1',
    points: '99'
  },
  {
    name: 'dustin',
    track: 'Web Designer',
    achievements: '5',
    points: '500'
  },
  {
    name: 'brooklyn',
    track: 'Full stack JavaScript developer',
    achievements: '50',
    points: '5000'
  },
  {
    name: 'brooklyn',
    track: 'Andiod developer',
    achievements: '50',
    points: '5000'
  }
];

var message;
var student;
var search;
var counter;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

while (true) {
    message = ''; //set message to empty every time run the while loop.
    counter = 0;  //set counter to 0 every time run the while loop.
    search  = prompt('input a student name, type quit to end.');
    if (search === null || search.toLowerCase() === 'quit'){
        break;
    } 
    for (var i = 0; i < students.length; i++ ) {
        student = students[i];
        if ( search.toLowerCase() === student.name.toLowerCase() ) {
            counter += 1;
            message += '<h3>Student: ' + student.name + '</h3>' ;
            message += '<p>Track: ' + student.track + '</p>' ;
            message += '<p>Achievements: ' + student.achievements + '</p>' ;
            message += '<p>Points: ' + student.points + '</p>';
        }    
    }   
    message = 'Found ' + counter + ' result(s).' + message;
    print(message);
}